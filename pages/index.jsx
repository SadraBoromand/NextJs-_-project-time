import { useRouter } from "next/router";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import EventsSearch from "../components/events/events-search";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
