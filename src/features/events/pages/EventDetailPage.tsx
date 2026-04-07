import Card from "@/components/Card";
import { useEventService } from "../services/EventService";
import { useParams } from "react-router-dom";
import TableRenderer from "../components/TableRenderer";
import { useHistory } from "@/hooks/useHistory";
import { useEffect } from "react";
import { parseLinks } from "@/lib/parseLinks";
import Badge from "@/components/Badge";
import { ParagraphImage } from "@/components/ParagraphImage";
import { Backpack, Skull } from "lucide-react";
import useGameStore from "@/features/game/store/gameStore";
import type { WealthCode } from "@/features/game/types/GameType";

function EventDetailPage() {
  const { tag } = useParams();
  const { getEventDataByTag } = useEventService();
  const event = getEventDataByTag(tag as string);
  const { addToHistory } = useHistory();
  const { addBackpackItem } = useGameStore();
  const eventIsItem = event?.type === "item";
  const eventIsEnemy = event?.type === "combat";
  const { addEnemy } = useGameStore();

  const handleAddItem = () => {
    addBackpackItem(event?.title);
  };

  const handleAddEnemy = () => {
    const defaultEnemy = {
      title: event?.title as string,
      combat: 0,
      endurance: 0,
      wealthCode: 0 as WealthCode,
    };

    addEnemy(defaultEnemy);
  };

  useEffect(() => {
    if (!event) return;

    addToHistory(event.tag, event.title);
  }, [addToHistory, event]);

  if (!event) return null;

  return (
    <Card title={event.title} tag={event.tag}>
      {eventIsItem && (
        <button
          className="cardBtn"
          onClick={() => handleAddItem()}
          title="Add item"
        >
          <Backpack />
        </button>
      )}

      {eventIsEnemy && (
        <button
          className="cardBtn"
          onClick={() => handleAddEnemy()}
          title="Add enemy"
        >
          <Skull />
        </button>
      )}

      {event.type && <Badge text={event.type} />}

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
