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
        style={{ borderBottom: "4px solid #000", zIndex: 9999 }}
        className="fixed pointer left-0 top-0 bg-orange flex flex-col"
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
