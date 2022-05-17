import React from "react";
import styles from "./Home.styles.module.scss";
import EnergyTypes from "./components/EnergyTypes";
import Category from "./components/Category";
import Breakdown from "./components/Breakdown";
import SankeyChart from "./components/SankeyChart";

const LeftHeader = () => (
  <div className={styles.leftHeader}>
    <EnergyTypes />
  </div>
);
const LeftMain = () => <SankeyChart />;

const LeftCol = () => (
  <div className={styles.leftColContainer}>
    <LeftHeader />
    <LeftMain />
  </div>
);

const RightCol = () => (
  <div className={styles.rightColContainer}>
    <Category />
    <Breakdown />
  </div>
);

const HomePage = () => (
  <div className={styles.homeContainer}>
    <div className={styles.title}>HQ Building</div>
    <div className={styles.extra}>
      <LeftCol />
      <RightCol />
    </div>
  </div>
);

export default React.memo(HomePage);
