import { Label, Divider } from "../../index";
import "./styles.css";
const Header = ({ label }) => {
  return (
    <>
      <div className="top-header">
        <Label label={label} />
      </div>
      <Divider />
    </>
  );
};

Header.defaultProps = {
  label: "",
};

export default Header;
