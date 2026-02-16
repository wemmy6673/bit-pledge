export const copyToClipboard = (text, callback) => {
  navigator.clipboard.writeText(text);
  if (callback) callback();
};

export const formatBTC = (amount, decimals = 2) => {
  return amount.toFixed(decimals);
};

export const truncateAddress = (address, startChars = 12, endChars = 8) => {
  if (!address) return '';
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
};