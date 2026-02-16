import React from 'react';
import { formatBTC } from '../../utils/helpers';

const CauseCard = ({ cause, onDonate }) => {
  const progressPercentage = (cause.raised / cause.goal) * 100;

  return (
    <div className="cause-card rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-400">
              {cause.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{cause.title}</h3>
          <p className="text-sm text-gray-400 mb-3">{cause.description}</p>
          <p className="text-xs text-gray-600 mono">Created by {cause.creator}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Progress</span>
          <span className="text-sm font-bold mono">
            {formatBTC(cause.raised)} / {formatBTC(cause.goal)} BTC
          </span>
        </div>
        <div className="progress-bar-bg h-2 rounded-full">
          <div
            className="progress-bar-fill h-full rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 mt-2">{cause.donors} donors</p>
      </div>

      <button
        onClick={() => onDonate(cause)}
        className="btn-primary w-full py-3 rounded-lg font-semibold"
      >
        Donate Now
      </button>
    </div>
  );
};

export default CauseCard;