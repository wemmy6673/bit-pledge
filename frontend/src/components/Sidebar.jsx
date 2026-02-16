import React from 'react';
import { Search, TrendingUp, Users, Plus, Bitcoin, Wallet } from 'lucide-react';
import { truncateAddress } from '../../utils/helpers';

const Sidebar = ({ 
  activeView, 
  setActiveView, 
  onCreateCause, 
  walletData 
}) => {
  const { address, connected, balance, connectWallet, disconnectWallet } = walletData;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1a1a1a] flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] flex items-center justify-center">
            <Bitcoin className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="text-xl font-bold">BitPledge</h1>
            <p className="text-xs text-gray-500 mono">Donate with Bitcoin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <button
          onClick={() => setActiveView('browse')}
          className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 ${
            activeView === 'browse' ? 'active' : ''
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="font-medium">Browse Causes</span>
        </button>
        
        <button
          onClick={() => setActiveView('trending')}
          className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 ${
            activeView === 'trending' ? 'active' : ''
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="font-medium">Trending</span>
        </button>
        
        <button
          onClick={() => setActiveView('my-donations')}
          className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 ${
            activeView === 'my-donations' ? 'active' : ''
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="font-medium">My Donations</span>
        </button>

        <div className="my-4 border-t border-[#1a1a1a]"></div>

        <button
          onClick={onCreateCause}
          className="btn-primary w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold"
        >
          <Plus className="w-5 h-5" />
          Create Cause
        </button>
      </nav>

      {/* Wallet Connection */}
      <div className="p-4 border-t border-[#1a1a1a]">
        {connected ? (
          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Connected</span>
              </div>
              <button
                onClick={disconnectWallet}
                className="text-xs text-gray-500 hover:text-white transition"
              >
                Disconnect
              </button>
            </div>
            <div className="mb-2">
              <p className="text-xs text-gray-500 mb-1">Address</p>
              <p className="text-sm mono truncate">{truncateAddress(address)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Balance</p>
              <p className="text-lg font-bold text-[#ff6b00]">{balance} BTC</p>
            </div>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="btn-primary w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold"
          >
            <Wallet className="w-5 h-5" />
            Connect Xverse
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;