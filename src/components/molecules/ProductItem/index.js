import { Label, Image } from "../../index";
import "./styles.css";

const ProductItem = ({ keyValue, head, head2, image, onClick, product }) => {
  return (
    <div className="product-link" key={keyValue}>
      <Image src={image} alt={head} />
      <div className="product-info" onClick={() => onClick(product)}>
        <div className="product-header">
          <Label label={head} color="primary" />
          <Label label={head2} color="secondary " />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
