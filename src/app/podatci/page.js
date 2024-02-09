import Image from "next/image";
import styles from "../page.module.css";

export default function Podatci() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Podatci</h1>
        <p>Podatci o nama</p>
      </div>
    </main>
  );
}