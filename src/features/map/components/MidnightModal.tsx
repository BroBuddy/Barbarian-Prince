import Card from "@/components/Card";
import { Modal } from "@/components/Modal";
import useGameStore from "@/features/game/store/gameStore";
import { BadgeCent, Beef, Moon, Utensils } from "lucide-react";
import { useState } from "react";
import ChoiceButton from "./ChoiceButton";

function MidnightModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { resources, modifyResources, nextDay, getTotalPayPerDay } =
    useGameStore();
  const totalPay = getTotalPayPerDay();
  const foodRes = resources.Food as number;
  const goldRes = resources.Gold as number;

  if (!modalOpen)
    return (
      <div
        className="pointer text-white bg-black rounded py-1"
        style={{
          position: "fixed",
          bottom: "55px",
          right: "calc(max(0px, (100vw - 768px) / 2) + 21px)",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setModalOpen(true)}
          className="flex p-1 px-2 items-center text-white pointer"
        >
          <Moon />
        </button>
      </div>
    );

  return (
    <Modal onClose={() => setModalOpen(false)}>
      <Card title="Midnight">
        <div className="flex items-center justify-between mb-3">
          <p>
            <strong>Meal</strong>
          </p>
          <div className="flex gap-10">
            <ChoiceButton onClick={() => modifyResources({ Starvation: 1 })}>
              No <Utensils size={20} />
            </ChoiceButton>

            <ChoiceButton
              disabled={foodRes <= 0}
              onClick={() => modifyResources({ Food: -1 })}
            >
              1 <Beef size={22} />
            </ChoiceButton>

            <ChoiceButton
              disabled={goldRes <= 0}
              onClick={() => modifyResources({ Gold: -1 })}
            >
              1 <BadgeCent size={22} />
            </ChoiceButton>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p>
            <strong>Lodging</strong>
          </p>
          <div className="flex gap-4">
            <ChoiceButton
              disabled={goldRes <= 0}
              onClick={() => modifyResources({ Gold: -1 })}
            >
              1 <BadgeCent size={22} />
            </ChoiceButton>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p>
            <strong>Followers</strong>
          </p>
          <div className="flex gap-4">
            <ChoiceButton
              disabled={goldRes < totalPay || totalPay === 0}
              onClick={() => modifyResources({ Gold: -totalPay })}
            >
              {totalPay} <BadgeCent size={22} />
            </ChoiceButton>
          </div>
        </div>

        <button
          onClick={() => {
            nextDay();
            setModalOpen(false);
          }}
          className="bg-dark-grey rounded pointer text-white p-2 mb-2 w-full"
        >
          Advance Day
        </button>
      </Card>
    </Modal>
  );
}

export default MidnightModal;
