import React from "react"
import './form-input.styles.scss'

const FormInput=({handlechange,label,...otherProperty})=>(
    <div className="group">
        <input className="form-input" onChange={handlechange} {...otherProperty} />
        {
            label?
            (<label className={`${otherProperty.value.length? 'shrink':''} form-input-label`}>
                {label}
            </label>):null
        }
    </div>
)
export default FormInput