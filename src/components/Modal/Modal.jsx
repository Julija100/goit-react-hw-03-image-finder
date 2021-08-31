import { Component } from "react";
import { createPortal } from "react-dom";
import { StyledOverlay, StyledModal } from "./StyledModal";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.okKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.okKeyDown);
  }

  onKeyDown = (element) => {
    if (element.key === "Escape") {
      this.props.onModalClose();
    }
  };

  onBackdropClick = (element) => {
    if (element.currentTurget === element.target) {
      this.props.onModalClose();
    }
  };

  render() {
    return createPortal(
      <StyledOverlay onClick={this.onBackdropClick}>
        <StyledModal> {this.props.children}</StyledModal>
      </StyledOverlay>,
      modalRoot
    );
  }
}

export default Modal;
