import React from 'react';
import { Search, TrendingUp, Users, Plus, Bitcoin, Wallet, ChevronRight, ChevronLeft } from 'lucide-react';
import { useXverseWallet } from '../../hooks/useXverseWallet';

import { truncateAddress } from '../../utils/helpers';

const Sidebar = ({ 
  activeView, 
  setActiveView, 
  onCreateCause, 
  walletData,
  isExpanded,
  setIsExpanded
}) => {
  // const { address, connected, balance, connectWallet, disconnectWallet } = walletData;
  const { address, connected, connectWallet, disconnectWallet } = useXverseWallet();


  return (
    <>
      {/* Backdrop — mobile only, visible when sidebar is expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/60 z-[90] md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <aside className={`fixed left-0 top-0 h-screen ${isExpanded ? 'w-64' : 'w-16'} bg-black border-r border-[#1a1a1a] flex flex-col z-[100] md:z-50 transition-all duration-300`}>
      {/* Logo */}
      <div className="p-4 border-b border-[#1a1a1a] flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] flex items-center justify-center">
            <Bitcoin className="w-6 h-6 text-black" />
          </div>
          {isExpanded && (
            <div className="whitespace-nowrap">
              <h1 className="text-xl font-bold">BitGive</h1>
              <p className="text-xs text-gray-500 mono">Donate with Bitcoin</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-shrink-0 w-8 h-8 rounded-lg hover:bg-[#1a1a1a] flex items-center justify-center transition"
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <button
          onClick={() => setActiveView('browse')}
          className={`sidebar-item w-full flex items-center ${isExpanded ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-lg mb-2 ${
            activeView === 'browse' ? 'active' : ''
          }`}
          title={!isExpanded ? 'Browse Causes' : ''}
        >
          <Search className="w-5 h-5 flex-shrink-0" />
          {isExpanded && <span className="font-medium whitespace-nowrap">Browse Causes</span>}
        </button>
        
        <button
          onClick={() => setActiveView('trending')}
          className={`sidebar-item w-full flex items-center ${isExpanded ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-lg mb-2 ${
            activeView === 'trending' ? 'active' : ''
          }`}
          title={!isExpanded ? 'Trending' : ''}
        >
          <TrendingUp className="w-5 h-5 flex-shrink-0" />
          {isExpanded && <span className="font-medium whitespace-nowrap">Trending</span>}
        </button>
        
        <button
          onClick={() => setActiveView('my-donations')}
          className={`sidebar-item w-full flex items-center ${isExpanded ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-lg mb-2 ${
            activeView === 'my-donations' ? 'active' : ''
          }`}
          title={!isExpanded ? 'My Donations' : ''}
        >
          <Users className="w-5 h-5 flex-shrink-0" />
          {isExpanded && <span className="font-medium whitespace-nowrap">My Donations</span>}
        </button>

        <div className="my-4 border-t border-[#1a1a1a]"></div>

        <button
          onClick={onCreateCause}
          className={`btn-primary w-full flex items-center ${isExpanded ? 'justify-center gap-2 px-4' : 'justify-center px-0'} py-3 rounded-lg font-semibold`}
          title={!isExpanded ? 'Create Cause' : ''}
        >
          <Plus className="w-5 h-5 flex-shrink-0" />
          {isExpanded && <span className="whitespace-nowrap">Create Cause</span>}
        </button>
      </nav>

      {/* Wallet Connection */}
      <div className="p-4 border-t border-[#1a1a1a]">
        {connected ? (
          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-4">
            {isExpanded ? (
              <>
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
                
              </>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <Wallet className="w-6 h-6 text-[#ff6b00]" />
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className={`btn-primary w-full flex items-center ${isExpanded ? 'justify-center gap-2 px-4' : 'justify-center px-0'} py-3 rounded-lg font-semibold`}
            title={!isExpanded ? 'Connect Xverse' : ''}
          >
            <Wallet className="w-5 h-5 flex-shrink-0" />
            {isExpanded && <span className="whitespace-nowrap">Connect Xverse</span>}
          </button>
        )}
      </div>
    </aside>
    </>
  );
};

export default Sidebar;