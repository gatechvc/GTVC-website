import styles from "./Exec.module.css";
import Image from "next/image";
import george from "../../assets/images/george.jpg";
import elaine from "../../assets/images/elaine.jpg";
import mila from "../../assets/images/mila.jpg";
import drake from "../../assets/images/drake.jpg";
import pearl from "../../assets/images/pearl.jpg";
import tejal from "../../assets/images/tejal.jpg";
import katelyn from "../../assets/images/katelyn.jpg";
import yatharth from "../../assets/images/yatharth.jpg";
import adithya from "../../assets/images/adithya.jpg";
import kush from "../../assets/images/kush.jpg";
import chris from "../../assets/images/chris.jpg";
import amanda from "../../assets/images/amanda.jpg";
import xander from "../../assets/images/xander.jpeg";

export default function Exec() {
  const exec = [
    {
      name: "Elaine Wen",
      position: "President",
      email: "eywen@gatech.edu",
      image: elaine,
    },
    {
      name: "Mila Patel",
      position: "Vice President",
      email: "mpatel484@gatech.edu",
      image: mila,
    },
    {
      name: "Drake Oakhill",
      position: "Director of External Relations",
      email: "doakhill3@gatech.edu",
      image: drake,
    },
    {
      name: "Xander Coles",
      position: "Director of Growth",
      email: "acoles6@gatech.edu",
      image: xander,
    },
    {
      name: "Adithya Gurunathan",
      position: "Director of Fund",
      email: "agurunathan6@gatech.edu",
      image: adithya,
    },
    {
      name: "Chris Hur",
      position: "Director of Research",
      email: "chur8@gatech.edu",
      image: chris,
    },
    {
      name: "Tejal Dahake",
      position: "Director of Curriculum",
      email: "tdahake3@gatech.edu",
      image: tejal,
    },
    {
      name: "Yatharth Bhargava",
      position: "Director of Marketing",
      email: "ybhargava8@gatech.edu",
      image: yatharth,
    },
    {
      name: "Kushagra Gupta",
      position: "Director of Administration",
      email: "kgupta344@gatech.edu",
      image: kush,
    },
    {
      name: "Amanda Ehrenhalt",
      position: "Community PM",
      email: "aehrenhalt6@gatech.edu",
      image: amanda,
    },
    {
      name: "Pearl Dumbu",
      position: "Community PM",
      email: "pdumbu3@gatech.edu",
      image: pearl,
    },
    {
      name: "Katelyn Lam",
      position: "Administration PM",
      email: "klam63@gatech.edu",
      image: katelyn,
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
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
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
