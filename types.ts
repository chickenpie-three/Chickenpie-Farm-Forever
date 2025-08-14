
export interface Vector2D {
  x: number;
  y: number;
}

export interface ChickenState {
  id: number;
  position: Vector2D;
  target: Vector2D | null;
  foodTargetId: number | null;
  isMovingRight: boolean;
  isHappy: boolean;
  happyUntil: number;
}

export interface FoodItem {
  id: number;
  position: Vector2D;
}
