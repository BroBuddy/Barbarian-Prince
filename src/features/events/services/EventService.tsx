import { useData } from "@/context/useData";
import type { Event, EventItem } from "../types/EventType";

export function useEventService() {
  const { eventData } = useData();

  const getEventData = (): EventItem[] => {
    if (!eventData) return [];
    return eventData.map(({ tag, title }) => ({ tag, title }));
  };

  const getEventDataByTag = (tag: string): Event | undefined => {
    return eventData.find((item: Event) => item.tag === tag) as Event;
  };

  return { getEventData, getEventDataByTag };
}
