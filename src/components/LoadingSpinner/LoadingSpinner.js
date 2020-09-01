import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { SpinnerContainer } from './SpinnerContainner'




function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  )
}

export default LoadingSpinner
