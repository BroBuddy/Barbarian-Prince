import ResourceManager from "@/features/game/components/ResourceManager";
import ResourceModal from "@/features/game/components/ResourceModal";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <div
        className="bg-light-grey flex flex-col"
        aria-expanded={isOpen}
        aria-controls="attribute-modal"
        onClick={() => toggleModal()}
      >
        <div className="flex justify-center">
          <ResourceManager />
        </div>
      </div>

      <ResourceModal isOpen={isOpen} toggleModal={toggleModal} />
    </header>
  );
};

export default Header;
