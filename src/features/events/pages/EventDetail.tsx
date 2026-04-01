import Card from "@/components/Card";
import { getEventDataByTag } from "../services/EventService";
import { useParams } from "react-router-dom";
import TableRenderer from "../components/TableRenderer";
import type { Event } from "../types/EventType";

function EventDetail() {
  const { tag } = useParams();
  const event: Event = getEventDataByTag(tag as string);

  if (!event) return null;

  return (
    <Card title={event.title} tag={event.tag}>
      <p>{event.desc}</p>

      {event.tables?.map((table, index) => (
        <TableRenderer key={index} table={table} />
      ))}

      {event.note && (
        <p>
          <em>
            <span className="text-purple">Important Note:</span> {event.note}
          </em>
        </p>
      )}
    </Card>
  );
}

export default EventDetail;
