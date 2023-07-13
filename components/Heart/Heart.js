import styles from "./Heart.module.css";
import Image from "next/image";
import heartLeft from "../../assets/images/HeartLeft.png";
import heartRight from "../../assets/images/HeartRight.png";

export default function Heart() {
  return (
    <div className={styles.Heart} id="about">
      <div className={styles.HeartTitle}>
        Our <span className={styles.yellow}>Story</span>
      </div>
      <div className={styles.HeartBody}>
        The Georgia Tech Venture Capital Club was founded to help raise
        awareness for career opportunities in Venture Capital and related
        Financial Services. Additionally, the club helps members get hands on
        experience and educates members about the venture capital industry.
      </div>
      <div className={styles.LeftContainer}>
        <Image
          src={heartLeft}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
      <div className={styles.RightContainer}>
        <Image
          src={heartRight}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
    </div>
  );
}
