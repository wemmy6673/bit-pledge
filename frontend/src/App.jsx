import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsSection from './components/StatsSection';
import SearchBar from './components/Searchbar';
import CausesGrid from './components/CausesGrid';
import CreateCauseModal from './components/CreateCauseModal';
import DonateModal from './components/DonateModal';
import GlobalStyles from './components/GlobalStyles';
import { useXverseWallet } from '../hooks/useXverseWallet';
import { mockCauses, mockStats } from '../data/mockData';

export default function App() {
  const [activeView, setActiveView] = useState('browse');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [selectedCause, setSelectedCause] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [causes] = useState(mockCauses);
  const [stats] = useState(mockStats);
  
  const walletData = useXverseWallet();

  const handleDonate = (cause) => {
    setSelectedCause(cause);
    setShowDonateModal(true);
  };

  const filteredCauses = causes.filter(cause =>
    cause.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cause.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cause.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <GlobalStyles />

      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        onCreateCause={() => setShowCreateModal(true)}
        walletData={walletData}
      />

      <main className="ml-64 min-h-screen">
        <Header activeView={activeView} />
        <StatsSection stats={stats} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CausesGrid causes={filteredCauses} onDonate={handleDonate} />
      </main>

      <CreateCauseModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        walletAddress={walletData.address}
        isWalletConnected={walletData.connected}
      />

      <DonateModal
        isOpen={showDonateModal}
        onClose={() => setShowDonateModal(false)}
        cause={selectedCause}
        isWalletConnected={walletData.connected}
      />
    </div>
  );
}