import React from 'react';

export interface MarkAllAsUnpackedProps {
  onClick: () => void;
}

export const MarkAllAsUnpacked: React.FC<MarkAllAsUnpackedProps> = ({
  onClick,
}) => {
  return (
    <div className="mb-16">
      <button className="w-full" onClick={onClick}>
        🏠 Mark All As Unpacked
      </button>
    </div>
  );
};
