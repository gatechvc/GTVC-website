import styles from "./Hero.module.css";
import Image from "next/image";
import darklogo from "../../assets/images/logodark.png";
import hamburger from "../../assets/images/hamburger.png";
import VC from "../../assets/images/VC.png";

export default function Hero() {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.Hero}>
        <div className={styles.Header}>
          <div className={styles.HamburgerContainer}>
            <Image src={hamburger} layout="responsive"></Image>
          </div>
          <div className={styles.HeaderLogoContainer}>
            <Image src={darklogo} layout="responsive"></Image>
          </div>
        </div>
        <div className={styles.HeroContent}>
          <div className={styles.HeroTitleContainer}>
            <div className={styles.HeroTitle}>
              Georgia Tech<br></br>
              <span className={styles.TitleSecond}>Venture Capital</span>
            </div>
          </div>
          <div className={styles.HeroBody}>
            Facilitating learning, recruiting, and networking for anyone
            interested in Venture Capital at Georgia Tech.
          </div>
        </div>
      </div>
      <div className={styles.VCContainer}>
        <Image src={VC}></Image>
      </div>
    </div>
  );
}
