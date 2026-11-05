import Features from "../components/Features";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Newsletter from "../components/Newsletter";
import RecentUpcomingEvents from "../components/RecentUpcomingEvents";
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <RecentUpcomingEvents></RecentUpcomingEvents>
      <Gallery></Gallery>
      <Newsletter></Newsletter>
    </div>
  );
}
