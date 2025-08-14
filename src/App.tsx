import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { ChickenState, FoodItem, Vector2D } from './types';
import {
  GAME_WIDTH,
  GAME_HEIGHT,
  CHICKEN_COUNT,
  GAME_TICK_MS,
  CHICKEN_SPEED,
  FOOD_REACH_DISTANCE,
  HAPPINESS_DURATION_MS
} from './constants';
import Chicken from './components/Chicken';
import Food from './components/Food';
import Scenery from './components/Scenery';
import ContactModal from './components/ContactModal';

// Helper function to calculate distance
const getDistance = (p1: Vector2D, p2: Vector2D) => {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};

const App: React.FC = () => {
  const [chickens, setChickens] = useState<ChickenState[]>([]);
  const [food, setFood] = useState<FoodItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const foodIdCounter = useRef(0);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  // Initialize chickens
  useEffect(() => {
    const initialChickens: ChickenState[] = [];
    for (let i = 0; i < CHICKEN_COUNT; i++) {
      initialChickens.push({
        id: i,
        position: {
          x: Math.random() * (GAME_WIDTH - 50) + 25,
          y: Math.random() * (GAME_HEIGHT - 50) + 25,
        },
        target: null,
        foodTargetId: null,
        isMovingRight: true,
        isHappy: false,
        happyUntil: 0
      });
    }
    setChickens(initialChickens);
  }, []);

  // Game Loop
  useEffect(() => {
    if (isModalOpen) return; // Pause game when modal is open

    const gameInterval = setInterval(() => {
      setChickens(prevChickens => {
        const currentFood = food; // Capture food state at the beginning of the tick
        return prevChickens.map(chicken => {
          let newChicken = { ...chicken };

          // Update happiness state
          if (newChicken.isHappy && Date.now() > newChicken.happyUntil) {
             newChicken.isHappy = false;
          }

          let foodTarget: FoodItem | undefined;
          if (newChicken.foodTargetId !== null) {
            foodTarget = currentFood.find(f => f.id === newChicken.foodTargetId);
            if (!foodTarget) { // food was eaten by another chicken
                newChicken.foodTargetId = null;
                newChicken.target = null;
            }
          }

          // 1. If no food target, find the closest available food
          if (!foodTarget) {
            let closestFood: FoodItem | null = null;
            let minDistance = Infinity;

            currentFood.forEach(f => {
              const isTargeted = prevChickens.some(c => c.foodTargetId === f.id && c.id !== chicken.id);
              if (!isTargeted) {
                const distance = getDistance(chicken.position, f.position);
                if (distance < minDistance) {
                  minDistance = distance;
                  closestFood = f;
                }
              }
            });

            if (closestFood) {
              newChicken.foodTargetId = closestFood.id;
              newChicken.target = closestFood.position;
              foodTarget = closestFood;
            }
          }
          
          // 2. If there is a target (food or random), move towards it
          if (newChicken.target) {
            const distance = getDistance(newChicken.position, newChicken.target);

            if (foodTarget && distance < FOOD_REACH_DISTANCE) {
              setFood(prevFood => prevFood.filter(f => f.id !== foodTarget?.id));
              newChicken.target = null;
              newChicken.foodTargetId = null;
              newChicken.isHappy = true;
              newChicken.happyUntil = Date.now() + HAPPINESS_DURATION_MS;
            } else { // Move towards target
              const dx = newChicken.target.x - newChicken.position.x;
              const dy = newChicken.target.y - newChicken.position.y;
              const angle = Math.atan2(dy, dx);
              
              const newX = newChicken.position.x + CHICKEN_SPEED * Math.cos(angle);
              const newY = newChicken.position.y + CHICKEN_SPEED * Math.sin(angle);

              newChicken.position = { x: newX, y: newY };
              newChicken.isMovingRight = dx > 0;

              // If reached random target, clear it
              if (!foodTarget && distance < FOOD_REACH_DISTANCE) {
                newChicken.target = null;
              }
            }
          } else { // 3. No target, roam randomly
            if (Math.random() < 0.01) { // 1% chance to pick a new random spot
              newChicken.target = {
                x: Math.random() * (GAME_WIDTH - 50) + 25,
                y: Math.random() * (GAME_HEIGHT - 100) + 50, // Avoid edges
              };
            }
          }
          
          return newChicken;
        });
      });
    }, GAME_TICK_MS);

    return () => clearInterval(gameInterval);
  }, [food, isModalOpen]);

  const handlePlaceFood = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!gameAreaRef.current) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    
    const xInEl = event.clientX - rect.left;
    const yInEl = event.clientY - rect.top;

    const scale = GAME_WIDTH / rect.width;
    const x = xInEl * scale;
    const y = yInEl * scale;

    if (x < 0 || x > GAME_WIDTH || y < 0 || y > GAME_HEIGHT) {
      return;
    }

    setFood(prevFood => [
      ...prevFood,
      { id: foodIdCounter.current++, position: { x, y } },
    ]);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#0f380f]">
      <div
        ref={gameAreaRef}
        onClick={handlePlaceFood}
        className="relative overflow-hidden cursor-pointer w-full h-full max-w-[540px] max-h-[960px] aspect-[9/16]"
        style={{ backgroundColor: '#9bbc0f', imageRendering: 'pixelated' }}
      >
        <Scenery />
        {food.map(f => (
          <Food key={f.id} food={f} />
        ))}
        {chickens.map(c => (
          <Chicken key={c.id} chicken={c} />
        ))}
        <button
            onClick={handleContactClick}
            className="absolute top-4 right-4 z-10 bg-[#0f380f] text-white py-2 px-4 border-2 border-[#306230] rounded-sm hover:bg-[#306230] active:bg-[#0b280b] focus:outline-none focus:ring-2 focus:ring-[#306230] focus:ring-offset-2 focus:ring-offset-[#9bbc0f]"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px' }}
            aria-label="Open contact information"
        >
            CONTACT
        </button>
      </div>
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;