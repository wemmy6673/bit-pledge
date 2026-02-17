import React from 'react';
import CauseCard from './CauseCard';

const CausesGrid = ({ causes, onDonate }) => {
  if (causes.length === 0) {
    return (
      <section className="px-8 pb-12">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No causes found</p>
          <p className="text-gray-600 text-sm mt-2">Try adjusting your search</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-8 pb-12">
      <div className="grid sm:grid-rows md:grid-cols-2 gap-6">
        {causes.map((cause) => (
          <CauseCard key={cause.id} cause={cause} onDonate={onDonate} />
        ))}
      </div>
    </section>
  );
};

export default CausesGrid;