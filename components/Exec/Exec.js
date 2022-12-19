import styles from "./Exec.module.css";
import Image from "next/legacy/image";
import george from "../../assets/images/george.jpg";

export default function Exec() {
  const exec = [
    {
      name: "George Goodfellow",
      position: "President",
      email: "george.goodfellow@gatech.vc",
      image: george,
    },
    {
      name: "George Goodfellow",
      position: "President",
      email: "george.goodfellow@gatech.vc",
      image: george,
    },
    {
      name: "George Goodfellow",
      position: "President",
      email: "george.goodfellow@gatech.vc",
      image: george,
    },
    {
      name: "George Goodfellow",
      position: "President",
      email: "george.goodfellow@gatech.vc",
      image: george,
    },
    {
      name: "George Goodfellow",
      position: "President",
      email: "george.goodfellow@gatech.vc",
      image: george,
    },
  ];

  return (
    <div className={styles.Exec}>
      <div className={styles.ExecTitle}>
        The <span className={styles.yellow}>Team</span>
      </div>
      <div className={styles.ExecContainer}>
        {exec.map((member) => {
          return (
            <div className={styles.ExecCard} key={member.email}>
              <div className={styles.ImageContainer}>
                <Image
                  src={member.image}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className={styles.CardContent}>
                <div className={styles.position}>{member.position}</div>
                <div className={styles.name}>{member.name}</div>
                <div className={styles.email}>{member.email}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
