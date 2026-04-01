import { eventData } from "../data/eventData";
import type { Event, EventItem } from "../types/EventType";

const getEventData = (): EventItem[] => {
  return eventData.map(({ tag, title }) => ({
    tag,
    title,
  }));
};

const getEventDataByTag = (tag: string): Event => {
  return eventData.find((item: Event) => item.tag === tag) as Event;
};

export { getEventData, getEventDataByTag };
