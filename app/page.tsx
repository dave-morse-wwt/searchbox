'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { SearchScreen } from "./components/SearchScreen";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <SearchScreen />
      </main>
    </Provider>
  );
}
