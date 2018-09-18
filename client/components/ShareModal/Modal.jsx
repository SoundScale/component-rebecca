const React = require('react');
const ReactDOM = require('react-dom');

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.modal = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.modal);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.modal);
  }


  render() {
    const { modalOpen } = this.props;
    if (!modalOpen) {
      return null;
    }
    return ReactDOM.createPortal(
      this.props.children,
      this.modal,
    );
  }
}

module.exports = Modal;
