
import React from 'react';
import type { FoodItem } from '../types';

interface FoodProps {
  food: FoodItem;
}

const Food: React.FC<FoodProps> = ({ food }) => {
  return (
    <div
      className="absolute"
      style={{
        left: `${food.position.x}px`,
        top: `${food.position.y}px`,
        transform: 'translateX(-50%) translateY(-50%)',
        width: '8px',
        height: '8px',
      }}
      aria-label="Chicken food"
    >
        <div className="w-full h-full bg-[#0f380f] rounded-sm animate-pulse"></div>
    </div>
  );
};

export default Food;
