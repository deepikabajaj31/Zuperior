import React from "react";

export interface ShinyWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyWrapper: React.FC<ShinyWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative rounded-[1rem] overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 rounded-[1rem] pointer-events-none rotate-shine"
        style={{
          background:
            "conic-gradient(from 5deg at 45.6% 44.7%, rgba(0,0,0,0.07) 10deg, rgb(203,182,250) 200.196deg, rgba(0,0,0,0.36) 10deg)",
        }}
      />

      <div className="relative m-[1.5px] rounded-[1rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default ShinyWrapper;
