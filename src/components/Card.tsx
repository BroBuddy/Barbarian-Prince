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
      <div className="flex items-center bg-orange mb-2">
        {tag && (
          <span className="text-white text-md ml-2 my-2">
            {tag.toUpperCase()}
          </span>
        )}

        <div className="mx-2">
          <Headline>{title}</Headline>
        </div>
      </div>

      {children && <div className="mx-1">{children}</div>}
    </div>
  );
};

export default Card;
