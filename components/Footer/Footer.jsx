import styles from "./Footer.module.css";
import footer_logo from "../../assets/images/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_footer}>
        <Image
          src={footer_logo}
          className={styles.footer_logo}
        ></Image>
        <div className={styles.footer_footer_text}>Made by the georgia tech venture capital team</div>
      </div>
    </div>
  );
}
