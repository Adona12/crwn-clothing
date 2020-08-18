import React from "react"
import {SpinnerOverlay,SpinnerContainer} from "./with-spinner.styles"
const WithSpinner=WrappedContainer=>{
 
    const Spinner=({isLoading,...otherProps})=>{
      return isLoading?<SpinnerOverlay>
          <SpinnerContainer/>
      </SpinnerOverlay>:<WrappedContainer{...otherProps}/>
    }
    return Spinner
}
export default WithSpinner