import React from 'react';

const Header = ({ activeView }) => {
  const getHeaderContent = () => {
    switch (activeView) {
      case 'browse':
        return {
          title: 'Browse Causes',
          description: 'Support causes you care about with Bitcoin'
        };
      case 'trending':
        return {
          title: 'Trending Causes',
          description: 'Most popular causes this week'
        };
      case 'my-donations':
        return {
          title: 'My Donations',
          description: 'Track your donation history'
        };
      default:
        return {
          title: 'Browse Causes',
          description: 'Support causes you care about with Bitcoin'
        };
    }
  };

  const content = getHeaderContent();

  return (
    <header className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a] z-40">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-1">{content.title}</h2>
            <p className="text-gray-500">{content.description}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;