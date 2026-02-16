import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { formatBTC, copyToClipboard } from '../../utils/helpers';

const DonateModal = ({ isOpen, onClose, cause, isWalletConnected }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [copiedAddress, setCopiedAddress] = useState(false);

  if (!isOpen || !cause) return null;

  const quickAmounts = [0.001, 0.005, 0.01, 0.05];

  const handleCopyAddress = () => {
    copyToClipboard(cause.creator, () => {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    });
  };

  const handleQuickAmount = (amount) => {
    setDonationAmount(amount.toString());
  };

  const handleDonate = () => {
    // Handle donation logic here
    console.log('Donating:', donationAmount, 'BTC to', cause.title);
    onClose();
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-8">
      <div className="modal-content bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl w-full max-w-xl">
        <div className="p-6 border-b border-[#1a1a1a] flex items-center justify-between">
          <h3 className="text-2xl font-bold">Donate to Cause</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-[#1a1a1a] flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-4 mb-6">
            <h4 className="font-bold mb-2">{cause.title}</h4>
            <p className="text-sm text-gray-400 mb-3">{cause.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="mono font-bold text-[#ff6b00]">
                {formatBTC(cause.raised)} / {formatBTC(cause.goal)} BTC
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Donation Amount (BTC)</label>
            <input
              type="number"
              step="0.001"
              placeholder="0.000"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white mono transition text-lg"
            />
            <div className="flex gap-2 mt-3">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAmount(amount)}
                  className="btn-secondary flex-1 py-2 rounded-lg text-sm font-medium mono"
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Recipient Address</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={cause.creator}
                disabled
                className="flex-1 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white mono text-sm transition disabled:opacity-50"
              />
              <button
                onClick={handleCopyAddress}
                className="btn-secondary p-3 rounded-lg"
              >
                {copiedAddress ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {!isWalletConnected && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-500">
                ⚠️ Connect your Xverse wallet to send the donation
              </p>
            </div>
          )}
        </div>
        
        <div className="p-6 border-t border-[#1a1a1a] flex gap-3">
          <button
            onClick={onClose}
            className="btn-secondary flex-1 py-3 rounded-lg font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleDonate}
            disabled={!isWalletConnected}
            className="btn-primary flex-1 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;