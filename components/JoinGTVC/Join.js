import Image from "next/image";
import styles from "./Join.module.css";

export default function Join() {
  return (
    <div className={styles.Join}>
      <div className={styles.JoinTitle}>
        Why Join <span className={styles.yellow}>GTVC</span>?
      </div>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.ImageContainer}>
            <Image></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
