import Card from "@/components/Card";
import { useEventService } from "../services/EventService";
import { useParams } from "react-router-dom";
import TableRenderer from "../components/TableRenderer";
import { useHistory } from "@/hooks/useHistory";
import { useEffect } from "react";
import { parseLinks } from "@/lib/parseLinks";
import Badge from "@/components/Badge";
import { ParagraphImage } from "@/components/ParagraphImage";
import { Plus } from "lucide-react";
import useGameStore from "@/features/game/store/gameStore";

function EventDetailPage() {
  const { tag } = useParams();
  const { getEventDataByTag } = useEventService();
  const event = getEventDataByTag(tag as string);
  const { addToHistory } = useHistory();
  const { addBackpackItem } = useGameStore();
  const eventIsItem = event?.type === "item";

  const handleAdd = () => {
    addBackpackItem(event?.title);
  };

  useEffect(() => {
    if (!event) return;

    addToHistory(event.tag, event.title);
  }, [addToHistory, event]);

  if (!event) return null;

  return (
    <Card title={event.title} tag={event.tag}>
      {eventIsItem && (
        <button className="cardBtn" onClick={() => handleAdd()} title="Add">
          <Plus />
        </button>
      )}

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
            <span className="text-purple mr-1">Note:</span>
            {parseLinks(event.note as string)}
          </em>
        </p>
      )}
    </Card>
  );
}

export default EventDetailPage;
