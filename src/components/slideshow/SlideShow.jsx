import React, { useState, useEffect } from 'react';
import styles from '../slideshow/SlideShow.module.css'
const Slideshow = ({ items, visibleCount = 3, interval = 2000 }) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  const getVisibleItems = () => {
    let visibleItems = [];
    for (let i = 0; i < visibleCount; i++) {
      visibleItems.push(items[(startIndex + i) % items.length]);
    }
    return visibleItems;
  };

  return (
    <div className={styles['slider-container']}>
      {getVisibleItems().map((item, index) => (
        <div key={index} className={styles['slider-item']}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
