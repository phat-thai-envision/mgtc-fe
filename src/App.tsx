import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";
import styles from "./App.module.scss";

const App = () => (
  <div className={styles.appContainer}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
