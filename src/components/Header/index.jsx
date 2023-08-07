import React from 'react';
import styles from './style.module.css';
import { Typography } from '../Typography';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profile_name}>
        <Typography variant={'h4'}>Welcome back,</Typography>
        <Typography variant={'h4'}>Jenny!</Typography>
      </div>
      <div className={styles.profile_img}>
        <img src='assets/profile_img.jpg' alt='profile pic' />
      </div>
    </header>
  );
};

export default Header;
