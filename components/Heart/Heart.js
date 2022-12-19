import styles from "./Heart.module.css";
import Image from "next/image";
import heartLeft from "../../assets/images/HeartLeft.png";
import heartRight from "../../assets/images/HeartRight.png";

export default function Heart() {
  return (
    <div className={styles.Heart}>
      <div className={styles.HeartTitle}>
        Lorem <span className={styles.yellow}>ipsum dolor</span> sit amet
      </div>
      <div className={styles.HeartBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu
      </div>
      <div className={styles.LeftContainer}>
        <Image
          src={heartLeft}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }}></Image>
      </div>
      <div className={styles.RightContainer}>
        <Image
          src={heartRight}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }}></Image>
      </div>
    </div>
  );
}
