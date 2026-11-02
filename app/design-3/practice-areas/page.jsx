import styles from "../design.module.css";
import Nav from "../Nav";
import Footer from "../Footer";
import PracticeAreasExplorer from "../../components/PracticeAreasExplorer";

export const metadata = { title: "Practice Areas | GD Thiru & Co." };

export default function PracticeAreas() {
  return (
    <div className={styles.page}>
      <Nav />
      <PracticeAreasExplorer design="premium" />
      <Footer />
    </div>
  );
}
