import {Modal as AntdModal} from 'antd';
import PropTypes from 'prop-types';
import ConfirmProps from './props';
import './styles.css';

const { confirm } = AntdModal;

const Confirm = ({type, title, description, okText, cancelText, onCheck, onCancel, visible}) => {
   return confirm({
        title,
        content: description,
        okText,
        okType: type,
        cancelText,
        onOk: onCheck,
        onCancel,
        visible
      });
};

Confirm.propTypes = {
    type: PropTypes.oneOf([ConfirmProps.type.confirm, ConfirmProps.type.error, ConfirmProps.type.success, ConfirmProps.type.warning]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    okText: PropTypes.string.isRequired,
    cancelText: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
    onCancel: PropTypes.func,    
};
Confirm.defaultProps = {
    type: ConfirmProps.type.confirm,
    onCancel: null,
};

export default Confirm;
