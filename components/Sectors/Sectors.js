import Image from "next/image";
import styles from "./Sectors.module.css";
import test from "../../assets/images/test.jpg";

export default function Sectors() {
  return (
    <div className={styles.Sectors}>
      <div className={styles.SectorsTitle}>
        Explore Our Diverse <span className={styles.yellow}>Sectors</span>
      </div>
      <div className={styles.SectorContainer}>
        <div className={styles.SectorCard}>
          <div className={styles.CardImageContainer}>
            <Image src={test} layout="fill" objectFit="cover"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
