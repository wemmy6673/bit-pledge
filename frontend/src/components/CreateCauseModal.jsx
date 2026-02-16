import React, { useState } from 'react';
import { X } from 'lucide-react';
import { categories } from '../../data/mockData';

const CreateCauseModal = ({ isOpen, onClose, walletAddress, isWalletConnected }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: categories[0],
    description: '',
    goal: '',
    address: walletAddress || ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle cause creation logic here
    console.log('Creating cause:', formData);
    onClose();
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-8">
      <div className="modal-content bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl w-full max-w-2xl">
        <div className="p-6 border-b border-[#1a1a1a] flex items-center justify-between">
          <h3 className="text-2xl font-bold">Create New Cause</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-[#1a1a1a] flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Cause Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter a descriptive title"
              className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white transition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white transition"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your cause and how the funds will be used"
              className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white resize-none transition"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Funding Goal (BTC)</label>
            <input
              type="number"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              step="0.001"
              placeholder="0.000"
              className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white mono transition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Bitcoin Address</label>
            <input
              type="text"
              name="address"
              value={isWalletConnected ? walletAddress : formData.address}
              onChange={handleChange}
              placeholder="bc1q..."
              disabled={isWalletConnected}
              className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white mono transition disabled:opacity-50"
            />
            {!isWalletConnected && (
              <p className="text-xs text-gray-500 mt-2">Connect your wallet to auto-fill</p>
            )}
          </div>
        </div>
        
        <div className="p-6 border-t border-[#1a1a1a] flex gap-3">
          <button
            onClick={onClose}
            className="btn-secondary flex-1 py-3 rounded-lg font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="btn-primary flex-1 py-3 rounded-lg font-semibold"
          >
            Create Cause
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCauseModal;