import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <h1>
        <Link href="/">Početna</Link>
        <Link href="/o-nama">O nama</Link>
        <Link href="/podatci">Osnovni podatci</Link>
        <Link href="/projekti">EU projekti</Link>
        <Link href="/kontakt">Kontakt</Link>
      </h1>
    </>
  );
}