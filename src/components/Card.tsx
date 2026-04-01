import "./Card.scss";

type CardProps = {
  type: string;
  name: string;
  image: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ type, name, image, children }) => {
  return (
    <div className={`card ${type}`}>
      <div className="name text-xl p-2">
        <strong>{name}</strong>
      </div>
      <div>
        <img src={image} alt={name} className="w-18" />
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
};

export default Card;
