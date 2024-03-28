import Image from "next/image";
import styles from "./page.module.css";
import { SearchScreen } from "./components/SearchScreen";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchScreen />
    </main>
  );
}
