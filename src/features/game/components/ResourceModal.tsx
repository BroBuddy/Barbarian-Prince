import ResourceEditor from "./ResourceEditor";

const ResourceModal = ({
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
        backgroundColor: "rgba(0,0,0,0.9)",
      }}
      className="flex justify-center items-center modal fade-in"
    >
      <div
        onClick={handleContentClick}
        className="flex flex-col text-center p-6"
        style={{ maxWidth: "600px", width: "90%" }}
      >
        <ResourceEditor />
      </div>
    </div>
  );
};

export default ResourceModal;
