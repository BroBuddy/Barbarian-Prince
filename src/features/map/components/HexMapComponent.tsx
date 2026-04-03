import "./HexMap.scss";

const HEX_WIDTH = 60;
const HEX_HEIGHT = 52;

const HexMapComponent = ({ map = hexMap }) => {
  return (
    <div className="hex-map">
      {map.map((col, cIdx) => (
        <div
          key={cIdx}
          className="hex-column"
          style={{ marginTop: cIdx % 2 !== 0 ? HEX_HEIGHT / 2 : 0 }}
        >
          {col.map((tile, rIdx) => (
            <div
              key={rIdx}
              className={`hex ${tile}`}
              style={{ width: HEX_WIDTH, height: HEX_HEIGHT }}
            >
              {tile[0].toUpperCase()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexMapComponent;
