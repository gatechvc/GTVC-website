import Image from "next/image";
import styles from "./Join.module.css";
import test from "../../assets/images/test.jpg";

export default function Join() {
  return (
    <div className={styles.Join}>
      <div className={styles.JoinTitle}>
        Why Join <span className={styles.yellow}>GTVC</span>?
      </div>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.CardContent}>
            <div className={styles.CardHeader}>Sector Head</div>
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.CardContent}>
            <div className={styles.CardBGBody}>
              lorem impsum dolor lorem impsum dolor lorem impsum dolorlorem
              impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum
              dolor
            </div>
          </div>
          <div className={styles.CardImageContainer}>
            <Image src={test} className={styles.CardImage}></Image>
          </div>
          <div className={styles.CardHeader}>Sector Head</div>
        </div>
        <div className={styles.Card}>
          <div className={styles.CardContent}>
            <div className={styles.CardHeader}>Sector Head</div>
          </div>
        </div>
      </div>
    </div>
  );
}
