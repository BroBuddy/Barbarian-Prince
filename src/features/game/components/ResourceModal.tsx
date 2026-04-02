import ResourceEditor from "./ResourceEditor";

const ResourceModal = ({
  isOpen,
}: {
  isOpen: boolean;
  toggleModal: (state: boolean) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div style={{ zIndex: 999 }} className={`flex modal fade-in`}>
      <div className="flex text-center">
        <ResourceEditor />
      </div>
    </div>
  );
};

export default ResourceModal;
