import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { AlertBoxContainer } from './AlertBoxContainer'
import { AlertBoxCloseIcon } from './AlertBoxCloseIcon'


function AlertMessage({ alertMessage }) {
  const [show, setShow] = useState(true)

  function handleClose() {
    setShow(false)
  }

  return (
    <AlertBoxContainer show={show}>
      {alertMessage}
      <AlertBoxCloseIcon>
        <CloseIcon onClick={handleClose} />
      </AlertBoxCloseIcon>
    </AlertBoxContainer>
  )
}

export default AlertMessage
