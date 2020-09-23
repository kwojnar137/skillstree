import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import { AlertBoxContainer } from "./AlertBoxContainer";
import { AlertBoxCloseIcon } from "./AlertBoxCloseIcon";

function AlertMessage({ variant = "info", message, onClose }) {
  const variants = [
    { name: "danger", color: "#f44336" },
    { name: "warning", color: "#FFCF37" },
    { name: "info", color: "#3780FF" },
  ];

  let chosenVariant = variants.filter(({ name }) => name === variant);

  return (
    <AlertBoxContainer variant={chosenVariant[0].color}>
      {message}
      <AlertBoxCloseIcon>
        <CloseIcon className="closeIcon" onClick={onClose} />
      </AlertBoxCloseIcon>
    </AlertBoxContainer>
  );
}

export default AlertMessage;

AlertMessage.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};
