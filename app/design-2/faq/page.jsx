import styles from "../design.module.css";
import Nav from "../Nav";
import Footer from "../Footer";
import { FirmFaq } from "../../components/FirmPages";

export const metadata = { title: "Frequently Asked Questions | GD Thiru & Co." };

export default function Faq() {
  return <div className={styles.page}><Nav /><FirmFaq design="2" /><Footer /></div>;
}
