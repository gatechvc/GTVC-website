import styles from "./Hero.module.css";
import Image from "next/image";
import darklogo from "../../assets/images/logodark.png";
import hamburger from "../../assets/images/hamburger.png";
import VC from "../../assets/images/VC.png";
import Link from "next/link";
import VCMask from "../../assets/images/VCMask.png";
import Vcbg from "../../assets/images/VCbg.png";
import { useState } from "react";

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.HeroContainer}>
      <div className={styles.Hero}>
        <div className={styles.Header}>
          <div className={styles.HamburgerContainer}>
            <Image
              src={hamburger}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                cursor: "pointer",
              }}
              onClick={() => setExpanded(!expanded)}
            ></Image>
            {expanded && (
              <div className={styles.ExpandedMenu}>
                <div className={styles.ExpandedMenuItem}>
                  <Link href="/" className={styles.ExpandedMenuLink}>
                    HOME
                  </Link>
                </div>
                <div className={styles.ExpandedMenuItem}>
                  <Link href="/#about" className={styles.ExpandedMenuLink}>
                    ABOUT
                  </Link>
                </div>
                <div className={styles.ExpandedMenuItem}>RESEARCH</div>
              </div>
            )}
          </div>
          <div className={styles.HeaderLogoContainer}>
            <Image
              src={darklogo}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            ></Image>
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
        <Image src={VC} className={styles.bigVC}></Image>
      </div>
      <div className={styles.VCContainer2}>
        <Image
          src={VCMask}
          className={styles.bigVC}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
      <div className={styles.VCContainer3}>
        <Image src={Vcbg} className={styles.bigVC}></Image>
      </div>
    </div>
  );
}
