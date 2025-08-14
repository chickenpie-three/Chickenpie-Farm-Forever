import React from 'react';
import type { ChickenState } from '../types';

interface ChickenProps {
  chicken: ChickenState;
}

const PixelHeart: React.FC = () => (
    <div className="w-4 h-3 relative" style={{ imageRendering: 'pixelated' }}>
        <div className="w-1 h-1 bg-[#d02c2f] absolute top-0 left-1"></div>
        <div className="w-1 h-1 bg-[#d02c2f] absolute top-0 left-2"></div>
        <div className="w-1 h-1 bg-[#d02c2f] absolute top-1 left-0"></div>
        <div className="w-1 h-1 bg-[#d02c2f] absolute top-1 left-1"></div>
        <div className="w-1 h-1 bg-[#d02c2f] absolute top-1 left-2"></div>
        <div className="w-1 h-1 bg-[#d02c2f] absolute top-1 left-3"></div>
        <div className="w-1 h-1 bg-[#d02c2f] absolute top-2 left-1"></div>
        <div className="w-1 h-1 bg-[#d02c2f] absolute top-2 left-2"></div>
    </div>
);


const Chicken: React.FC<ChickenProps> = ({ chicken }) => {
  const { position, isMovingRight, isHappy } = chicken;

  const style: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translateX(-50%) translateY(-50%) scaleX(${isMovingRight ? 1 : -1})`,
    width: '32px', // Upscaled from 16px
    height: '28px', // Upscaled from 14px
    imageRendering: 'pixelated',
  };

  return (
    <div
      className="absolute"
      style={style}
      aria-label="A creature"
    >
        {isHappy && (
            <div className="absolute -top-6 left-1/2" style={{transform: "translateX(-50%) scale(2)"}}>
                <PixelHeart />
            </div>
        )}
        <div className="relative w-full h-full">
            {/* Main shape with border */}
            <div className="absolute w-[24px] h-[20px] bg-white border-2 border-[#0f380f] rounded-sm top-[6px] left-[4px]">
                {/* Eyes */}
                <div className="absolute w-[2px] h-[2px] bg-[#0f380f] top-[8px] left-[5px]"></div>
                <div className="absolute w-[2px] h-[2px] bg-[#0f380f] top-[8px] left-[15px]"></div>
            </div>
            {/* Ears */}
            <div className="absolute w-[6px] h-[6px] bg-white border-2 border-b-0 border-[#0f380f] rounded-t-sm top-[2px] left-[6px]"></div>
            <div className="absolute w-[6px] h-[6px] bg-white border-2 border-b-0 border-[#0f380f] rounded-t-sm top-[2px] left-[20px]"></div>
        </div>
    </div>
  );
};

export default Chicken;