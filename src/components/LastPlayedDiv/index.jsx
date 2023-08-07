import React from 'react';
import styles from './style.module.css';
import { Typography } from '../Typography';

const LastPlayedDiv = ({ img, text, hover }) => {
  const hovered = () => {
    switch (hover) {
      case 'sky_blue':
        return styles.sky_blue;
      case 'blue':
        return styles.blue;
      case 'green':
        return styles.green;
      case 'yellow':
        return styles.yellow;

      default:
        break;
    }
  };

  return (
    <div className={styles.div}>
      <img className={hovered()} src={img} alt='hero last played' />
      <Typography variant={'h5'}>{text}</Typography>
    </div>
  );
};

export default LastPlayedDiv;
