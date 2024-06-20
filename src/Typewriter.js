import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [isForward, setForward] = useState(true);
  const [de, setDe] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    if(currentWord !== text.length) {
      setDe(delay);
      const timeout = setTimeout(() => {
        if(isForward) {
          setDe(delay);
          setCurrentIndex(prevIndex => prevIndex+1);
          setCurrentText(text[currentWord].substring(0, currentIndex));
          if(currentIndex == text[currentWord].length) {
            setForward(false);
            setIsSwitching(true);
            if(currentWord == text.length-1) {
              setCurrentWord(prevWord => prevWord+1);
            }
          }
        } else {
          if(!isForward && isSwitching) {
            setDe(delay*10);
            setIsSwitching(false);
          } else {
            setDe(delay/2);
          }
          setCurrentIndex(prevIndex => prevIndex-1);
          var temp = text[currentWord].substring(0, currentIndex);
          if(temp == "") {
            setCurrentText("\xa0");
            setCurrentWord(prevWord => prevWord + 1);
            setForward(true);
          } else {
            setCurrentText(temp);
          }
        }
      }, de);
  
      return () => {
        clearTimeout(timeout)
    };

  }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;