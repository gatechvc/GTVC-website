import Image from "next/image";
import styles from "./Join.module.css";
import test from "../../assets/images/test.jpg";
import gm_pic from "../../assets/images/gm_pic.jpg";
import research from "../../assets/images/research.jpg";

export default function Join() {
  return (
    <div className={styles.Join}>
      <div className={styles.JoinTitle}>
        Why Join <span className={styles.yellow}>GTVC</span>?
      </div>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.CardContent}>
            <div className={styles.CardBGBody}>
              Research analysts report directly to the sector head, conduct due
              diligence, do thematic research, and present to venture
              capitalists.
            </div>
          </div>
          <div className={styles.CardImageContainer}>
            <Image src={research} className={styles.CardImage}></Image>
          </div>
          <div className={styles.CardHeader}>Research Analyst</div>
        </div>
        <div className={styles.Card}>
          <div className={styles.CardContent}>
            <div className={styles.CardBGBody}>
              This role is a liaison between research analysts and the director
              of research. Sector heads lead research, assign tasks to analysts,
              guide due diligence processes, and structure reports/deliverables.
            </div>
          </div>
          <div className={styles.CardImageContainer}>
            <Image src={test} className={styles.CardImage}></Image>
          </div>
          <div className={styles.CardHeader}>Sector Head</div>
        </div>
        <div className={styles.Card}>
          <div className={styles.CardContent}>
            <div className={styles.CardBGBody}>
              General Members have access to the speaker series and all
              communication with a better platform for being recruited as a
              research analyst in the following semesters.
            </div>
          </div>
          <div className={styles.CardImageContainer}>
            <Image src={gm_pic} className={styles.CardImage}></Image>
          </div>
          <div className={styles.CardHeader}>General Member</div>
        </div>
      </div>
    </div>
  );
}
