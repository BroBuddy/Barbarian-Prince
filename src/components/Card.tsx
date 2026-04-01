import { Headline } from "./Headline";
import "./Card.scss";

type CardProps = {
  title: string;
  tag?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, tag, children }) => {
  return (
    <div className="card">
      <div className="flex items-center mb-2">
        {tag && (
          <span className="text-orange text-md mr-2">{tag.toUpperCase()}</span>
        )}
        {title && <Headline>{title}</Headline>}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Card;
