import styles from './Footer.module.css';
import footer_logo from '../../assets/images/logo.png';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='footer-footer'>
                <Image
                    src={footer_logo}
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }}></Image>
            </div>
        </footer>
    );
}