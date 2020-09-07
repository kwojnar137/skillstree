import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { AlertBoxContainer } from './AlertBoxContainer'
import { AlertBoxCloseIcon } from './AlertBoxCloseIcon'
import { messegeFromStatus } from '../../utils'


function AlertMessage({ status }) {
  const [show, setShow] = useState(true)
  console.log(status)

  function handleClose() {
    setShow(false)
  }

  const alertMessage = messegeFromStatus(status)

  if (alertMessage != 'OK') {
    return (
      <AlertBoxContainer show={show}>
        {alertMessage}
        <AlertBoxCloseIcon>
          <CloseIcon onClick={handleClose} />
        </AlertBoxCloseIcon>
      </AlertBoxContainer>
    )
  }
  return <></>
}

export default AlertMessage
