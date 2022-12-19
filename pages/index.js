import Hero from "../components/Hero/Hero";
import Heart from "../components/Heart/Heart";
import Events from "../components/Events/Events";
import Exec from "../components/Exec/Exec";
import Sectors from "../components/Sectors/Sectors";
import Join from "../components/JoinGTVC/Join";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Heart></Heart>
      <Join></Join>
      <Events></Events>
      <Sectors></Sectors>
      <Exec></Exec>
      <Footer></Footer>
    </div>
  );
}
