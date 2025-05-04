import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import ShinyWrapper from './ShinyWrapper';

export interface ShinyButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  iconSize?: number;
  className?: string;
  bgColor?: string;
  isRotate?: boolean; 
}

const Button: React.FC<ShinyButtonProps> = ({
  label,
  onClick,
  iconSize = 18,
  className = '',
  bgColor = '',
  isRotate = false, 
}) => {
  return (
    <ShinyWrapper className={`mb-[2rem] ${className}`}>
      <div
        className="
          h-[2.7rem] w-[13rem]
          flex items-center justify-center
          text-white font-semibold gap-2
          rounded-[1rem]
          cursor-pointer
          group
        "
        onClick={onClick}
        style={{ backgroundColor: bgColor }}
      >
        <h1>{label}</h1>
        <div
          className={`
            transition-transform duration-300 ease-in-out
            ${isRotate ? 'group-hover:rotate-45' : ''}
          `}
        >
          <ArrowUpRight size={iconSize} />
        </div>
      </div>
    </ShinyWrapper>
  );
};

export default Button;
