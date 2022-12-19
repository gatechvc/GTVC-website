import styles from "./EventsCard.module.css";
import rightEventHandle from "../../../assets/images/righteventhandle.png";
import leftEventHandle from "../../../assets/images/lefteventhandle.png";
import Image from "next/legacy/image";

export default function EventsCard(props) {
  return (
    <div className={styles.EventsCardContainer}>
      <div className={styles.EventsCard}>
        {props.alignment == "right" ? (
          <div className={styles.Handle}>
            <Image src={rightEventHandle}></Image>
          </div>
        ) : (
          <></>
        )}

        <div className={styles.Content}>
          <div className={styles.Date}>{props.date}</div>

          <div className={styles.Speaker}>{props.speaker}</div>
          <div className={styles.Description}>{props.description}</div>
          {props.alignment == "right" ? (
            <div className={styles.TypeRight}>{props.type}</div>
          ) : (
            <div className={styles.TypeLeft}>{props.type}</div>
          )}

          <div className={styles.Location}>{props.location}</div>
        </div>

        {props.alignment != "right" ? (
          <div className={styles.Handle}>
            <Image src={leftEventHandle}></Image>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
