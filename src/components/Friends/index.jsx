import React from 'react';
import styles from './style.module.css';
import { Typography } from '../Typography';

const Friends = () => {
  return (
    <div className={styles.div}>
      <Typography variant={'h3'}>friends</Typography>
      <img src='assets/frinds-light1.png' alt='' />
    </div>
  );
};

export default Friends;
