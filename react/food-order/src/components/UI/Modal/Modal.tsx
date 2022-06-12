import { FC, Fragment, MouseEventHandler, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop: FC<{ onClose: () => void }> = ({ onClose }) => {
  const clickHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return <div className={classes.backdrop} onClick={clickHandler} />;
};

const ModalOverlay: FC<PropsWithChildren> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement: Element = document.getElementById("overlays") as Element;

const Modal: FC<PropsWithChildren & { onClose: () => void }> = ({
  onClose,
  children,
}) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
