import React from 'react';
import { Bitcoin, TrendingUp, Users } from 'lucide-react';

const StatsSection = ({ stats }) => {
  return (
    <section className="px-8 py-6">
      <div className="grid sm:grid-rows-3 md:grid-cols-3 gap-6">
        <div className="stat-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Bitcoin className="w-8 h-8 text-[#ff6b00]" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Total Donated</p>
          <p className="text-2xl font-bold mono">{stats.totalDonated.toFixed(2)} BTC</p>
        </div>
        
        <div className="stat-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-[#ff6b00]" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Active Causes</p>
          <p className="text-2xl font-bold">{stats.activeCauses}</p>
        </div>
        
        <div className="stat-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-[#ff6b00]" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Total Donors</p>
          <p className="text-2xl font-bold">{stats.totalDonors}</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;