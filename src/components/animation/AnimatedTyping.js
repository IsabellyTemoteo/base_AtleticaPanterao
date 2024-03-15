import React, { useState, useEffect } from 'react';

function AnimatedTyping({ title }) {
  const [typedTitle, setTypedTitle] = useState('');
  const [isFinishedTyping, setIsFinishedTyping] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isFinishedTyping) {
      timeout = setTimeout(() => {
        const nextCharIndex = typedTitle.length;
        if (nextCharIndex < title.length) {
          setTypedTitle(title.substring(0, nextCharIndex + 1));
        } else {
          setIsFinishedTyping(true);
        }
      }, 150); 
    }
    return () => clearTimeout(timeout);
  }, [typedTitle, title, isFinishedTyping]);

  useEffect(() => {
    setTypedTitle('');
    setIsFinishedTyping(false);
  }, [title]);

  return (
    <div>
      <span>{typedTitle}</span>
    </div>
  );
}

export default AnimatedTyping;