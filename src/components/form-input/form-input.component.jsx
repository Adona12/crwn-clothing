import React from "react"
import './form-input.styles.scss'
import {GroupContainer,FormInputContainer,FormInputLabelContainer} from "./form-input.styles"
const FormInput=({handlechange,label,...props})=>(
    <GroupContainer>
        <FormInputContainer onChange={handlechange} {...props} />
        {
            label?
            (<FormInputLabelContainer  className={props.value.length? 'shrink':'' }>
                {label}
            </FormInputLabelContainer>):null
        }
    </GroupContainer>
)



export default FormInput