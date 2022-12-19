import styles from "./Events.module.css";
import EventsCard from "./EventsCard/EventsCard";
import Image from "next/image";
import EmptyCard from "./EventsCard/EmptyCard";
import downEventHandle from "../../assets/images/downeventhandle.png";

export default function Events() {
  const Events = [
    {
      date: "September 12th, 2022 6pm-8pm TBD",
      location: "Mason 3133",
      speaker: "Blake Platton",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 1",
      alignment: "left",
    },
    {
      date: "September 12th, 2022 6pm-8pm TBD",
      location: "Mason 3133",
      speaker: "Blake Platton",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 1",
      alignment: "right",
    },
    {
      date: "September 12th, 2022 6pm-8pm TBD",
      location: "Mason 3133",
      speaker: "Blake Platton",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 1",
      alignment: "left",
    },
    {
      date: "September 12th, 2022 6pm-8pm TBD",
      location: "Mason 3133",
      speaker: "Blake Platton",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 1",
      alignment: "right",
    },
  ];

  return (
    <div className={styles.Events}>
      <div className={styles.EventsTitle}>
        Our <span className={styles.yellow}>Events</span>
      </div>
      <div className={styles.EventsTimelineContainer}>
        <div className={styles.EventsLeft}>
          {Events.map((event) => {
            if (event.alignment == "left") {
              return (
                <EventsCard
                  date={event.date}
                  location={event.location}
                  speaker={event.speaker}
                  description={event.description}
                  alignment="left"
                  type={event.type}
                  key={event.date}
                ></EventsCard>
              );
            } else {
              return <EmptyCard key={`empty ${event.date}`}></EmptyCard>;
            }
          })}
        </div>
        <div className={styles.EventsRight}>
          {Events.map((event) => {
            if (event.alignment == "right") {
              return (
                <EventsCard
                  date={event.date}
                  location={event.location}
                  speaker={event.speaker}
                  description={event.description}
                  alignment="right"
                  type={event.type}
                  key={event.date}
                ></EventsCard>
              );
            } else {
              return <EmptyCard key={`empty ${event.date}`}></EmptyCard>;
            }
          })}
        </div>
      </div>
      <div className={styles.FinalEventContainer}>
        <div className={styles.FinalEventDate}>
          September 12th, 2022 6pm-8pm TBD
        </div>
        <div className={styles.FinalEventTitle}>Final Pitch Competition</div>
        <div className={styles.FinalEventBody}>
          Join us at our final event to learn about the research our sectors
          completed this semester
        </div>
        <div className={styles.Location}>Mason 3133</div>
      </div>
    </div>
  );
}
