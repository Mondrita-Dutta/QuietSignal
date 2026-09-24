'use client';
import React from 'react';
import { getContractAddress } from '@/config';

export default function AdminPage() {
  const deployedAddress = getContractAddress();
  const [copied, setCopied] = React.useState(false);

  const copyAddress = () => {
    if (!deployedAddress) return;
    navigator.clipboard.writeText(deployedAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Contract Details</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        The QUIETSIGNAL contract is currently live and verified on Midnight Preprod.
      </p>

      <div style={{ padding: '32px', border: '1px solid var(--border-color)', borderRadius: '16px', background: 'var(--bg-secondary)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--text-primary)' }}>Live Network Status</h2>

        <div style={{ padding: '24px', background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '12px', color: '#065f46' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '1.2rem' }}>
            ✓ Contract Active
          </div>
          <p style={{ marginBottom: '12px' }}>Midnight Preprod Contract Address:</p>
          <div style={{ fontFamily: 'monospace', background: '#d1fae5', padding: '16px', borderRadius: '8px', wordBreak: 'break-all', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.1rem' }}>{deployedAddress}</span>
            <button 
              onClick={copyAddress} 
              style={{ 
                cursor: 'pointer', 
                background: 'none', 
                border: '1px solid #065f46', 
                color: '#065f46',
                padding: '6px 12px',
                borderRadius: '6px',
                fontWeight: 'bold'
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
