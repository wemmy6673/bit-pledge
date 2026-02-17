import React from 'react';

const GlobalStyles = () => {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
      
      * {
        font-family: 'Outfit', sans-serif;
      }
      
      .mono {
        font-family: 'JetBrains Mono', monospace;
      }
      
      .gradient-border {
        position: relative;
        background: #0a0a0a;
      }
      
      .gradient-border::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(135deg, #ff6b00, #ff8c00);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .gradient-border:hover::before {
        opacity: 1;
      }
      
      .stat-card {
        background: linear-gradient(135deg, rgba(255, 107, 0, 0.05), rgba(255, 140, 0, 0.02));
        border: 1px solid rgba(255, 107, 0, 0.1);
        transition: all 0.3s ease;
      }
      
      .stat-card:hover {
        border-color: rgba(255, 107, 0, 0.3);
        background: linear-gradient(135deg, rgba(255, 107, 0, 0.08), rgba(255, 140, 0, 0.03));
        transform: translateY(-2px);
      }
      
      .cause-card {
        background: #0f0f0f;
        border: 1px solid #1a1a1a;
        transition: all 0.3s ease;
      }
      
      .cause-card:hover {
        border-color: rgba(255, 107, 0, 0.3);
        box-shadow: 0 8px 32px rgba(255, 107, 0, 0.1);
      }
      
      .progress-bar-bg {
        background: #1a1a1a;
        overflow: hidden;
        position: relative;
      }
      
      .progress-bar-fill {
        background: linear-gradient(90deg, #ff6b00, #ff8c00);
        transition: width 0.6s ease;
      }
      
      .btn-primary {
        background: linear-gradient(135deg, #ff6b00, #ff8c00);
        transition: all 0.3s ease;
      }
      
      .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 24px rgba(255, 107, 0, 0.3);
      }
      
      .btn-secondary {
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        transition: all 0.3s ease;
      }
      
      .btn-secondary:hover {
        background: #222;
        border-color: rgba(255, 107, 0, 0.3);
      }
      
      .sidebar-item {
        transition: all 0.2s ease;
        position: relative;
      }
      
      .sidebar-item:hover {
        background: rgba(255, 107, 0, 0.05);
      }
      
      .sidebar-item.active {
        background: rgba(255, 107, 0, 0.1);
      }
      
      .sidebar-item.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: #ff6b00;
      }
      
      .modal-overlay {
        backdrop-filter: blur(8px);
        animation: fadeIn 0.2s ease;
      }
      
      .modal-content {
        animation: slideUp 0.3s ease;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(20px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      input:focus, textarea:focus {
        outline: none;
        border-color: #ff6b00;
        box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
      }
      
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #0a0a0a;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #2a2a2a;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #3a3a3a;
      }
    `}</style>
  );
};

export default GlobalStyles;