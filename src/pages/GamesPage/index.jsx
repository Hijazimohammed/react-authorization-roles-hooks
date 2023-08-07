import React from 'react';
import styles from './style.module.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import NewGames from '../../components/NewGames';
import GamesBottomSection from '../../components/GamesBottomSection';

const GamesPage = () => {
  return (
    <div className={styles.div_parent}>
      <Sidebar />
      <span className={`${styles.line} ${styles.line_light}`}></span>
      <main className={styles.main}>
        <Header />
        {/* Outlet */}
        <NewGames />
        <GamesBottomSection />
      </main>
    </div>
  );
};

export default GamesPage;
