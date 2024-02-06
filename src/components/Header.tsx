import React from 'react';

export interface HeaderProps {
  items: Item[];
}

export const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <header id="page-header">
      <h1 className="text-2xl font-bold">Packing List</h1>
      <p id="number-of-items">
        {items.length} {items.length === 1 ? 'item' : 'items'}
      </p>
    </header>
  );
};
