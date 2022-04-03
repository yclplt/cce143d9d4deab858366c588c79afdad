import { Label, Image } from "../../index";
import { Tag } from "antd";
import "./styles.css";

const ProductDetail = ({ data }) => {
  return (
    <div className="product-detail">
      <Image src={data?.images?.[0]?.src} alt={data?.title} preview={false} />
      <div className="product-detail-info">
        <div className="product-header">
          <Label label={data?.title} color="primary" />
          <Label
            label={data?.options[0]?.values?.join(", ")}
            color="secondary"
          />
          <Tag>{data?.status}</Tag>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
