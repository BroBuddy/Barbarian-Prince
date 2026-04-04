import Tabs, { type TabItem } from "@/components/Tabs";
import ResourceEditor from "./ResourceEditor";
import FollowerList from "./FollowerList";

const GameModal = ({
  isOpen,
  toggleModal,
}: {
  isOpen: boolean;
  toggleModal: (state: boolean) => void;
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = () => {
    toggleModal(false);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const tabs: TabItem[] = [
    {
      label: "Cal Arath",
      content: <ResourceEditor />,
    },
    {
      label: "Followers",
      content: <FollowerList />,
    },
  ];

  return (
    <div
      onClick={handleBackgroundClick}
      style={{
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        paddingTop: "30px",
        backgroundColor: "rgba(0,0,0,0.9)",
      }}
      className="flex justify-center modal fade-in"
    >
      <div
        onClick={handleContentClick}
        className="flex flex-col p-6"
        style={{ maxWidth: "280px", width: "90%" }}
      >
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default GameModal;
