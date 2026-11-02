import styles from "../design.module.css";
import Nav from "../Nav";
import Footer from "../Footer";
import { FirmAbout } from "../../components/FirmPages";

export const metadata = { title: "About the Firm | GD Thiru & Co." };

export default function About() {
  return <div className={styles.page}><Nav /><FirmAbout design="4" /><Footer /></div>;
}
