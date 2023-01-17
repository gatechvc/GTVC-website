import styles from "./Events.module.css";
import EventsCard from "./EventsCard/EventsCard";
import Image from "next/image";
import EmptyCard from "./EventsCard/EmptyCard";
import downEventHandle from "../../assets/images/downeventhandle.png";

export default function Events() {
  const Events = [
    {
      date: "January 23rd, 2023 6:15PM - 7:15PM",
      location: "Scheller 103",
      speaker: "Sean O' Brien and Michael Cohn",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 1",
      alignment: "left",
    },
    {
      date: "January 30th, 2023 6:15PM - 7:15PM",
      location: "Scheller 103",
      speaker: "Jack Semrau",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 2",
      alignment: "right",
    },
    {
      date: "February 6th, 2023 6:15PM - 7:15PM",
      location: "Scheller 103",
      speaker: "Jake Kohler",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 3",
      alignment: "left",
    },
    {
      date: "February 13th, 2023 6:15PM - 7:15PM",
      location: "Scheller 103",
      speaker: "Problem",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Curriculum 1",
      alignment: "right",
    },
    {
      date: "February 20th, 2023 6:15PM - 7:15PM",
      location: "Scheller 103",
      speaker: "Lisa Calhoun",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 4",
      alignment: "left",
    },
    {
      date: "February 27th, 2023 6:15PM - 7:15PM",
      location: "IC 109",
      speaker: "Product & Team: Seth Radman",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Curriculum 2",
      alignment: "right",
    },
    {
      date: "March 6th, 2023 6:15PM - 7:15PM",
      location: "IC 109",
      speaker: "Jonathan King",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 5",
      alignment: "left",
    },
    {
      date: "March 13th, 2023 6:15PM - 7:15PM",
      location: "IC 109",
      speaker: "Market Sizing + Milestone Metrics: Scott Lopano",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Curriculum 3",
      alignment: "right",
    },

    {
      date: "March 27th, 2023 6:15PM - 7:15PM",
      location: "IC 109",
      speaker: "Market Sizing + Milestone Metrics: Scott Lopano",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Curriculum 4",
      alignment: "left",
    },

    {
      date: "April 3rd, 2023 6:15PM - 7:15PM",
      location: "IC 109",
      speaker: "Abhinaya Konduru",
      description:
        "Join us to get an introduction to VC, how it works, and how it makes money.",
      type: "Speaker 6",
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
          April 24th, 2023 6:15PM - 7:15PM
        </div>
        <div className={styles.FinalEventTitle}>Final Event</div>
        <div className={styles.FinalEventBody}>
          Join us at our final event to learn about the research our sectors
          completed this semester
        </div>
        <div className={styles.Location}>Scheller 100</div>
      </div>
    </div>
  );
}
