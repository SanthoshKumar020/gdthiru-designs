import styles from "../design.module.css";
import Nav from "../Nav";
import Footer from "../Footer";
import { FirmContact } from "../../components/FirmPages";

export const metadata = { title: "Contact | GD Thiru & Co." };

export default function Contact() {
  return <div className={styles.page}><Nav /><FirmContact design="4" /><Footer /></div>;
}
