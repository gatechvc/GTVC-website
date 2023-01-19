import styles from "./Footer.module.css";
import footer_logo from "../../assets/images/logo.png";
import Image from "next/image";
import insta from '../../assets/images/insta.png'
import linkedin from '../../assets/images/linkedin.png'
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content_container}>
        <div className={styles.footer_list}>
          <div className={styles.footer_list_heading}>Our Socials</div>
          <div className={styles.social_list}>
            <Link href="https://www.instagram.com/gatechvc/"><Image className={styles.social_icon} src={insta}></Image></Link>
            <Link href="https://www.linkedin.com/company/77628610/"><Image className={styles.social_icon} src={linkedin}></Image></Link>
          </div>
        </div>
        <div className={styles.footer_list}>
          <div className={styles.footer_list_heading}><Link href="mailto:gatechvc@gmail.com" className={styles.mail_link}>Contact Us</Link></div>
          <div className={styles.footer_list_heading}>Past Research</div>
        </div>
      </div>
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
