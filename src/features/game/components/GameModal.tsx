import Tabs, { type TabItem } from "@/components/Tabs";
import ResourceEditor from "./ResourceEditor";
import FollowerList from "./FollowerList";
import styles from "./GameModal.module.scss";

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
    <div onClick={handleBackgroundClick} className={styles.modal}>
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
