import Image from "next/image";
import styles from "./Sectors.module.css";
import test from "../../assets/images/test.jpg";
import climatetech from "../../assets/images/climatetech.png";
import consumer from "../../assets/images/consumer.jpg";
import crypto from "../../assets/images/crypto.png";

export default function Sectors() {
  const sectors = [
    {
      name: "Climate Tech",
      description:
        "This sector explores Climate Technology startups that use the application of technology to mitigate and adapt to climate change.",
      image: climatetech,
    },
    {
      name: "Consumer",
      description:
        "The consumer sector refers to companies that produce and sell goods and services directly to individuals for their personal use.",
      image: consumer,
    },
    {
      name: "Crypto",
      description:
        "The crypto sector includes companies and organizations involved in the development, research, trading, and use of cryptocurrency and blockchain technology.",
      image: crypto,
    },
    {
      name: "Cybersecurity",
      description:
        "The cybersecurity sector is a rapidly growing industry that deals with the protection of digital information and systems from unauthorized access, use, disclosure, disruption, modification, or destruction. ",
    },
    {
      name: "Sustainability",
      description:
        "The sustainability sector is a broad industry that encompasses companies, organizations and initiatives that work towards promoting environmentally and socially responsible practices.",
    },
    {
      name: "Healthtech",
      description:
        "Healthtech, also known as digital health, is a rapidly growing industry that encompasses the use of technology to improve healthcare delivery and outcomes.",
    },
    {
      name: "Deep Tech",
      description:
        "Deep tech refers to a category of technology that is based on scientific breakthroughs and engineering innovations.",
    },
    {
      name: "Supply Chain",
      description:
        "The supply chain sector refers to the system of organizations, people, activities, information and resources involved in creating and delivering a product or service from the raw materials stage to the end customer.",
    },
    {
      name: "Fintech",
      description:
        "Fintech is a rapidly growing industry that uses technology to improve and automate financial services.",
    },
  ];

  return (
    <div className={styles.Sectors}>
      <div className={styles.SectorsTitle}>
        Explore Our Diverse <span className={styles.yellow}>Sectors</span>
      </div>
      <div className={styles.SectorContainer}>
        {sectors.map((sector) => {
          return (
            <div className={styles.SectorCard} key={sector.name}>
              <div className={styles.CardImageContainer}>
                <Image
                  src={sector.image ? sector.image : test}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.SectorTitle}>{sector.name}</div>
                <div className={styles.SectorBody}>{sector.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
