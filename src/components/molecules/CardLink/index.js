import { CardPoint, Label, Button } from "../../index";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./styles.css";

const CardLink = ({
  point = 0,
  up,
  down,
  keyValue,
  head,
  head2,
  onDeleteLink,
}) => {
  return (
    <div className="card-link" key={keyValue}>
      <CardPoint point={point} />
      <div className="card-info">
        <div className="card-header">
          <Label label={head} color="primary" />
          <Label label={head2} color="secondary " />
        </div>
        <div className="card-vote">
          <Button
            type="link"
            label="Up Vote"
            icon={<ArrowUpOutlined />}
            onClick={up}
          />
          <Button
            type="link"
            label="Down Vote"
            icon={<ArrowDownOutlined />}
            onClick={down}
          />
        </div>
      </div>
      <div className="card-delete">
        <Button
          type="link"
          onClick={onDeleteLink}
          icon={<DeleteOutlined style={{ color: "#fff" }} />}
        />
      </div>
    </div>
  );
};

CardLink.defaultProps = {
  point: 0,
};

export default CardLink;
