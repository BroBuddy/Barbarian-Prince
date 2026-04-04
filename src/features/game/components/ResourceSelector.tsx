import styles from "./ResourceSelector.module.scss";

type ResourceSelectorProps = {
  max: number;
  value: number;
  onChange: (val: number) => void;
  color?: string;
};

const ResourceSelector = ({
  max,
  value,
  onChange,
  color = "#888",
}: ResourceSelectorProps) => {
  const boxColor = "#ddd";

  return (
    <div className="flex flex-row flex-wrap">
      {Array.from({ length: max + 1 }, (_, i) => i).map((index: number) => (
        <div
          key={index}
          onClick={() => onChange(index)}
          className={styles.resourceSelector}
          style={{
            backgroundColor: index <= value ? color : boxColor,
            color: index <= value ? "#fff" : "#000",
          }}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default ResourceSelector;
