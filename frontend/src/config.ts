export const PREVIEW_CONTRACT_ADDRESS = '';
export const PREPROD_CONTRACT_ADDRESS = '7971fa81bb4af823994172ff4bc09fc0a45dfcc472b49a0b7c7b6d183e0b212f';

export const FALLBACK_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_NETWORK_ID === 'preview'
    ? PREVIEW_CONTRACT_ADDRESS
    : PREPROD_CONTRACT_ADDRESS;

export const getContractAddress = (): string => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('QUIETSIGNAL_DEPLOYED_CONTRACT_ADDRESS');
    if (stored && stored.trim()) {
      const addr = stored.trim();
      return addr.startsWith('0x') ? addr.slice(2) : addr;
    }
  }
  const addr = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || FALLBACK_CONTRACT_ADDRESS;
  return addr.startsWith('0x') ? addr.slice(2) : addr;
};

export const CONTRACT_ADDRESS = getContractAddress();
