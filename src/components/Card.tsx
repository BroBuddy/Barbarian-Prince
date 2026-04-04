import { Headline } from "./Headline";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  tag?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, tag, children }) => {
  return (
    <div className={styles.card}>
      <div className="flex items-center bg-grey mb-2 py-1">
        {tag && (
          <span className="text-black text-md ml-2 my-2">
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
