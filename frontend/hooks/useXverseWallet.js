// hooks/useXverseWallet.js
import { useState } from 'react';
import { request } from 'sats-connect';

export const useXverseWallet = () => {
  const [addresses, setAddresses] = useState(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    try {
      const response = await request('wallet_connect', {
        message: 'Connect wallet',
        permissions: []
      });

      if (response.status === 'success') {
        setAddresses(response.result.addresses);
        setConnected(true);
        setError(null);
      } else {
        setError(response.error?.message || 'Connection failed');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const disconnectWallet = async () => {
    try {
      await request('wallet_disconnect', null);
      setAddresses(null);
      setConnected(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return { addresses, connected, error, connectWallet, disconnectWallet };
};