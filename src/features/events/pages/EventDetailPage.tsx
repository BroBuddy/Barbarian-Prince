import Card from "@/components/Card";
import { useEventService } from "../services/EventService";
import { useParams } from "react-router-dom";
import TableRenderer from "../components/TableRenderer";
import { useEffect, useCallback } from "react";
import { parseLinks } from "@/lib/parseLinks";
import Badge from "@/components/Badge";
import { ParagraphImage } from "@/components/ParagraphImage";
import { Backpack, Skull, Users } from "lucide-react";
import useGameStore from "@/features/game/store/gameStore";
import type { WealthCode } from "@/features/game/types/GameType";
import { useHistory } from "@/hooks/useHistory";

const ICON_MAP: Record<string, React.FC> = {
  item: Backpack,
  combat: Skull,
  npc: Users,
};

function EventDetailPage() {
  const { tag } = useParams();
  const { getEventDataByTag } = useEventService();
  const event = getEventDataByTag(tag as string);
  const { addToHistory } = useHistory();
  const { addBackpackItem, addEnemy, addFollower } = useGameStore();

  const handleAdd = useCallback(() => {
    if (!event) return;

    switch (event.type) {
      case "item":
        addBackpackItem(event.title);
        break;
      case "combat":
        addEnemy({
          title: event.title,
          combat: 0,
          endurance: 0,
          wealthCode: 0 as WealthCode,
        });
        break;
      case "npc":
        addFollower({
          title: event.title,
          combat: 0,
          endurance: 0,
          payPerDay: 0,
          mounted: false,
        });
        break;
    }
  }, [event, addBackpackItem, addEnemy, addFollower]);

  useEffect(() => {
    if (!event) return;
    addToHistory(event.tag, event.title);
  }, [addToHistory, event]);

  if (!event) return null;

  const ActionButton = ICON_MAP[event.type];

  return (
    <Card title={event.title}>
      {ActionButton && (
        <button
          className="cardBtn"
          onClick={handleAdd}
          title={`Add ${event.type}`}
        >
          <ActionButton />
        </button>
      )}

      {event.type && <Badge text={event.type} />}

      <div style={{ overflow: "hidden" }}>
        {event.image && <ParagraphImage tag={event.tag} title={event.title} />}
        <p>{parseLinks(event.desc || "")}</p>
      </div>

      {event.tables?.map((table, idx) => (
        <TableRenderer key={idx} table={table} />
      ))}

      {event.note && (
        <p>
          <em>
            <span className="text-purple mr-1">Note:</span>
            {parseLinks(event.note)}
          </em>
        </p>
      )}
    </Card>
  );
}

export default EventDetailPage;
