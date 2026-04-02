import Card from "@/components/Card";
import { getEventDataByTag } from "../services/EventService";
import { useParams } from "react-router-dom";
import TableRenderer from "../components/TableRenderer";
import type { Event } from "../types/EventType";
import { useHistory } from "@/hooks/useHistory";
import { useEffect } from "react";
import { parseLinks } from "@/lib/Helper";

function EventDetail() {
  const { tag } = useParams();
  const event: Event = getEventDataByTag(tag as string);
  const { addToHistory } = useHistory();

  useEffect(() => {
    addToHistory(event.tag, event.title);
  }, [addToHistory, event]);

  if (!event) return null;

  return (
    <Card title={event.title} tag={event.tag}>
      <p>{parseLinks(event.desc as string)}</p>

      {event.tables?.map((table, index) => (
        <TableRenderer key={index} table={table} />
      ))}

      {event.note && (
        <p>
          <em>
            <span className="text-purple mr-1">Important Note:</span>
            {parseLinks(event.note as string)}
          </em>
        </p>
      )}
    </Card>
  );
}

export default EventDetail;
