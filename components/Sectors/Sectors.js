import Image from "next/image";
import styles from "./Sectors.module.css";
import test from "../../assets/images/test.jpg";

export default function Sectors() {
  const sectors = [
    {
      name: "Biotech",
      description:
        "This sector explores Biological Technology startups that use the application of organisms, cells, parts thereof and molecular analogues for products and services.",
    },
    {
      name: "Biotech",
      description:
        "This sector explores Biological Technology startups that use the application of organisms, cells, parts thereof and molecular analogues for products and services.",
    },
    {
      name: "Biotech",
      description:
        "This sector explores Biological Technology startups that use the application of organisms, cells, parts thereof and molecular analogues for products and services.",
    },
    {
      name: "Biotech",
      description:
        "This sector explores Biological Technology startups that use the application of organisms, cells, parts thereof and molecular analogues for products and services.",
    },
    {
      name: "Biotech",
      description:
        "This sector explores Biological Technology startups that use the application of organisms, cells, parts thereof and molecular analogues for products and services.",
    },
    {
      name: "Biotech",
      description:
        "This sector explores Biological Technology startups that use the application of organisms, cells, parts thereof and molecular analogues for products and services.",
    },
    {
      name: "Biotech",
      description:
        "This sector explores Biological Technology startups that use the application of organisms, cells, parts thereof and molecular analogues for products and services.",
    },
    {
      name: "Biotech",
      description:
        "This sector explores Biological Technology startups that use the application of organisms, cells, parts thereof and molecular analogues for products and services.",
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
                  src={test}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover"
                  }}></Image>
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
