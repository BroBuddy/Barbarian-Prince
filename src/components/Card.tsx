import { Headline } from "./Headline";
import "./Card.scss";

type CardProps = {
  title: string;
  tag?: string;
  color?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, tag, color, children }) => {
  const divStyle = {
    backgroundColor: color || "#b36a46",
  };

  return (
    <div className="card" style={divStyle}>
      <div className="flex items-center bg-orange mb-2">
        {tag && (
          <span className="text-white text-md ml-2 my-2">
            {tag.toUpperCase()}
          </span>
        )}
        {title && (
          <div className="mx-2">
            <Headline>{title}</Headline>
          </div>
        )}
      </div>
      {children && <div className="mx-3">{children}</div>}
    </div>
  );
};

export default Card;
