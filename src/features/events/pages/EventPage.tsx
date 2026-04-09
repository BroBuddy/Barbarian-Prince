import Card from "@/components/Card";
import type { EventItem } from "../types/EventType";
import { Link } from "react-router-dom";
import { useEventService } from "../services/EventService";

function EventPage() {
  const { getEventData } = useEventService();
  const events: EventItem[] = getEventData();

  if (!events) return null;

  return (
    <Card title={`${events.length} Events`}>
      <div className="flex flex-wrap gap-3">
        {events.map((item: EventItem, index: number) => {
          return (
            <div key={index} className="mx-2 w-4">
              <Link to={`/event/${item.tag}`} className="text-purple">
                {item.tag.toUpperCase()}
              </Link>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default EventPage;
