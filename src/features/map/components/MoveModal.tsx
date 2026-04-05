import { Link } from "react-router-dom";
import type { MoveModalType } from "../types/MoveModalType";
import Card from "@/components/Card";
import { Dices } from "lucide-react";

interface MoveModalProps {
  state: MoveModalType;
  onAdvance: () => void;
  onClose: () => void;
}

export function MoveModal({ state, onAdvance, onClose }: MoveModalProps) {
  return (
    <div
      onClick={onClose}
      className="flex justify-center items-center pointer"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: 100,
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {state.phase === "lost_check" && (
          <Card title={`Leaving ${state.fromTerrain.title}`}>
            <p>
              Roll 2d6 – lost on <strong>{state.fromTerrain.lost}+</strong>
            </p>

            <button
              className="bg-dark-grey rounded pointer text-white p-1 px-5"
              onClick={onAdvance}
            >
              <span className="mr-1">
                <Dices />
              </span>
            </button>
          </Card>
        )}

        {state.phase === "lost" && (
          <Card title={`Lost in ${state.fromTerrain.title}`}>
            <p>You stay where you are.</p>

            <button
              className="bg-dark-grey rounded pointer text-white p-2 px-5"
              onClick={onClose}
            >
              Ok
            </button>
          </Card>
        )}

        {state.phase === "event_check" && (
          <Card title={`Entering ${state.toTerrain.title}`}>
            {state.toTerrain.event ? (
              <>
                <p>
                  Roll 2d6 – event on <strong>{state.toTerrain.event}+</strong>
                </p>

                <button
                  className="bg-dark-grey rounded pointer text-white p-1 px-5"
                  onClick={onAdvance}
                >
                  <span className="mr-1">
                    <Dices />
                  </span>
                </button>
              </>
            ) : (
              <button
                className="bg-dark-grey rounded pointer text-white p-2 px-5"
                onClick={onAdvance}
              >
                Next
              </button>
            )}
          </Card>
        )}

        {state.phase === "event" && (
          <Card title={`Event at ${state.toTerrain.title}`}>
            <p>
              Your path through {state.toTerrain.title} takes an unexpected
              turn...
            </p>

            <div className="flex">
              <Link
                to={`/event/${state.eventId}`}
                className="bg-dark-grey rounded pointer text-white p-2 px-5"
                onClick={onAdvance}
              >
                <span>Event</span>
              </Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
