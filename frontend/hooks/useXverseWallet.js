import { useState } from 'react';

export const useXverseWallet = () => {
  const [address, setAddress] = useState(null);
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    try {
      if (typeof window.BitcoinProvider !== 'undefined') {
        const response = await window.BitcoinProvider.connect();
        if (response.status === 'success') {
          setAddress(response.addresses[0].address);
          setConnected(true);
          // In production, fetch actual balance from API
          setBalance('0.00234');
        }
      } else {
        alert('Xverse wallet not detected. Please install Xverse wallet extension.');
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    setConnected(false);
    setBalance(null);
  };

  return { address, connected, balance, connectWallet, disconnectWallet };
};