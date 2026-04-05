import { useState } from "react";
import {
  getTerrainData,
  rollLost,
  rollEvent,
  rollD6,
  getEvent,
} from "../services/TerrainService";
import type { MoveModalType } from "../types/MoveModalType";

export function useMoveModal() {
  const [state, setState] = useState<MoveModalType | null>(null);

  function openModal(
    fromTag: string,
    toTag: string,
    targetCol: number,
    targetRow: number,
  ) {
    const fromTerrain = getTerrainData(fromTag);
    const toTerrain = getTerrainData(toTag);
    if (!fromTerrain || !toTerrain) return;

    setState({
      phase: "lost_check",
      fromTerrain,
      toTerrain,
      targetCol,
      targetRow,
    });
  }

  function advancePhase(): { col: number; row: number } | null {
    if (!state) return null;

    if (state.phase === "lost_check") {
      if (state.fromTerrain.lost === null) {
        setState({ ...state, phase: "event_check" });
        return null;
      }
      const { roll, isLost } = rollLost(state.fromTerrain);
      setState({ ...state, phase: isLost ? "lost" : "event_check", roll });
      return null;
    }

    if (state.phase === "event_check") {
      if (state.toTerrain.event === null) {
        closeModal();
        return { col: state.targetCol, row: state.targetRow };
      }
      const { roll, hasEvent } = rollEvent(state.toTerrain);
      if (hasEvent) {
        const die1 = rollD6();
        const die2 = rollD6();
        const eventId = getEvent(state.toTerrain, die1, die2);
        setState({ ...state, phase: "event", roll, die1, die2, eventId });
      } else {
        closeModal();
        return { col: state.targetCol, row: state.targetRow };
      }
      return null;
    }

    if (state.phase === "event") {
      const target = { col: state.targetCol, row: state.targetRow };
      closeModal();
      return target;
    }

    if (state.phase === "lost") {
      closeModal();
      return null;
    }

    return null;
  }

  function closeModal() {
    setState(null);
  }

  return { state, openModal, advancePhase, closeModal };
}
