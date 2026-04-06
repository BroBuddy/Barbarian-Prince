import Card from "@/components/Card";
import { Modal } from "@/components/Modal";
import useGameStore from "@/features/game/store/gameStore";
import { BadgeCent, Beef, Utensils } from "lucide-react";

interface MidnightModalProps {
  onClose: () => void;
}

export function MidnightModal({ onClose }: MidnightModalProps) {
  const { resources, modifyResources, nextDay, getTotalPayPerDay } =
    useGameStore();
  const totalPay = getTotalPayPerDay();
  const foodRes = resources.Food as number;
  const goldRes = resources.Gold as number;

  return (
    <Modal onClose={onClose}>
      <Card title="Midnight">
        <div className="flex items-center justify-between mb-3">
          <p>Meal:</p>
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
          <p>Lodging:</p>
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
          <p>Followers:</p>
          <div className="flex gap-4">
            <ChoiceButton
              disabled={goldRes < totalPay}
              onClick={() => modifyResources({ Gold: -totalPay })}
            >
              {totalPay} <BadgeCent size={22} />
            </ChoiceButton>
          </div>
        </div>

        <button
          onClick={() => {
            nextDay();
            onClose();
          }}
          className="bg-dark-grey rounded pointer text-white p-2 mb-2 w-full"
        >
          Advance Day
        </button>
      </Card>
    </Modal>
  );
}

function ChoiceButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex justify-center text-bold items-center gap-4 pointer"
    >
      {children}
    </button>
  );
}
