import Card from "@/components/Card";
import type { EventItem } from "../types/EventType";
import { Link } from "react-router-dom";
import { useEventService } from "../services/EventService";

function EventPage() {
  const { getEventData } = useEventService();
  const events: EventItem[] = getEventData();

  if (!events) return null;

  return (
    <Card title="Events">
      <div className="flex flex-wrap">
        {events.map((item) => {
          return (
            <div key={item.tag} className="m-1 w-5">
              <Link to={`/event/${item.tag}`}>{item.tag.toUpperCase()}</Link>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default EventPage;
