import Card from "@/components/Card";
import { useEventService } from "../services/EventService";
import { useParams } from "react-router-dom";
import TableRenderer from "../components/TableRenderer";
import { useHistory } from "@/hooks/useHistory";
import { useEffect } from "react";
import { parseLinks } from "@/lib/parseLinks";
import Badge from "@/components/Badge";
import { ParagraphImage } from "@/components/ParagraphImage";

function EventDetail() {
  const { tag } = useParams();
  const { getEventDataByTag } = useEventService();
  const event = getEventDataByTag(tag as string);
  const { addToHistory } = useHistory();

  useEffect(() => {
    if (!event) return;

    addToHistory(event.tag, event.title);
  }, [addToHistory, event]);

  if (!event) return null;

  return (
    <Card title={event.title} tag={event.tag}>
      {event.type && <Badge text={event.type} icon={event.type} />}

      <div style={{ overflow: "hidden" }}>
        {event.image && <ParagraphImage tag={event.tag} title={event.title} />}

        <p>{parseLinks(event.desc as string)}</p>
      </div>

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
