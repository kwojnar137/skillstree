import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import { AlertBoxContainer } from "./AlertBoxContainer";
import { AlertBoxCloseIcon } from "./AlertBoxCloseIcon";

function AlertMessage({ variant, message, onClose }) {
  const variants = [
    { name: "danger", color: "#f44336" },
    { name: "warning", color: "#FFCF37" },
    { name: "info", color: "#3780FF" },
  ];

  if (variant) {
    var chosenVariant = variants.filter((item) => {
      return item.name === variant;
    });
  } else {
    var chosenVariant = new Array({ color: "info" });
  }

  // console.log(chosenVariant);

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
  message: PropTypes.string,
  onClose: PropTypes.func,
};
