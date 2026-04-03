type ParagraphImageProps = {
  tag: string;
  title: string;
  size?: number;
};

export const ParagraphImage = ({
  tag,
  title,
  size = 150,
}: ParagraphImageProps) => (
  <img
    src={`/images/events/${tag}.png`}
    alt={title}
    style={{
      border: "1px solid #000",
      float: "right",
      margin: "10px",
      maxWidth: `${size}px`,
      maxHeight: `${size}px`,
    }}
  />
);
