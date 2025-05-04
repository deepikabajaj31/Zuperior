import { ArrowUpRight } from "lucide-react";
import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  iconSize?: number;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  iconSize = 18,
  className = "",
}) => {
  return (
    <div className={`relative rounded-[1rem] ${className}`} onClick={onClick}>
      <div
        className="
        absolute inset-0
        rounded-[1rem]
        bg-gradient-to-r 
          from-[#C0C0C0] 
          via-[#6242A5] 
          to-[#C0C0C0]
        animate-shine
      "
      />

      <div
        className="
          relative
          h-[2.7rem] w-[13rem]
          m-[1.3px]
          rounded-[1rem]
          flex items-center justify-center
          bg-[#6242A5]
          text-white font-semibold gap-2
        "
      >
        <h1>{label}</h1>
        <ArrowUpRight size={iconSize} />
      </div>
    </div>
  );
};

export default Button;
