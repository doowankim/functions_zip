import React from 'react';

interface emojiProps {
  label?: string;
  symbol: string;
}

const Emoji = ({ label, symbol }: emojiProps) => {
  return (
    <span role="img" aria-label={label ? label : ''} aria-hidden={label ? 'false' : 'true'}>
      {symbol}
    </span>
  );
};

export default Emoji;
