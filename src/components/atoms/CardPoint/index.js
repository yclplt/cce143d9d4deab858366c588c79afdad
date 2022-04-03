import "./styles.css";

const CardPoint = ({ point }) => {
  return (
    <div className="hepsi-point-box">
      <span>{point}</span> POINTS
    </div>
  );
};

CardPoint.defaultProps = {
  point: 0,
};

export default CardPoint;
