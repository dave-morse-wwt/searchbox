'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { SearchScreen, SearchScreenRated, SearchScreenRatedBuggy } from "./components/SearchScreenRated";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <SearchScreenRatedBuggy />
      </main>
    </Provider>
  );
}
