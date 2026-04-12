import Card from "@/components/Card";
import { Modal } from "@/components/Modal";
import { Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function DailyActionsModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  if (!modalOpen)
    return (
      <div
        className="pointer text-white bg-black rounded py-1"
        style={{
          position: "fixed",
          bottom: "55px",
          left: "calc(max(0px, (100vw - 768px) / 2) + 23px)",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setModalOpen(true)}
          className="flex p-1 px-2 items-center text-white pointer"
        >
          <Sun />
        </button>
      </div>
    );

  return (
    <Modal onClose={() => setModalOpen(false)}>
      <Card title="Daily Actions">
        <p>
          <strong>Any Hex:</strong>
        </p>

        <ul className="mx-3">
          <li>
            <Link to="/rule/r222">Healing Wounds</Link>
          </li>
          <li>
            <Link to="/rule/r215b">Hunting</Link>
          </li>
          <li>
            <Link to="/rule/r204">Travel</Link>
          </li>
          <li>
            <Link to="/rule/r214">Search Cache</Link>
          </li>
        </ul>

        <p>
          <strong>Restricted Hexes:</strong>
        </p>

        <ul className="mx-3 mb-3">
          <li>
            <Link to="/rule/r209">Seek News & Information</Link>
            <br />
            (Town, castle, or temple)
          </li>
          <li>
            <Link to="/rule/r210">Seek to Hire Followers</Link>
            <br />
            (Town or castle)
          </li>
          <li>
            <Link to="/rule/r211">Seek Audience</Link>
            <br />
            (Town, castle, or temple)
          </li>
          <li>
            <Link to="/rule/r212">Submit Offering</Link>
            <br />
            (Temple only)
          </li>
          <li>
            <Link to="/rule/r208">Search Ruins</Link>
            <br />
            (Ruins only)
          </li>
        </ul>
      </Card>
    </Modal>
  );
}

export default DailyActionsModal;
