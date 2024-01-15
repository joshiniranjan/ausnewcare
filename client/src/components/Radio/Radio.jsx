import React from 'react'
import './Radio.css'

const Radio = (props) => {
    const {labelTitle, classType, category,idval, handleInput,textValue} = props;
    // console.log(textValue)
    return (
        <>
            {
                labelTitle ? 
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-2">
                        {labelTitle}
                    </label>
                : ''
            }
            
            <div className={classType}>		
                <input id={idval} type={classType === 'radioWrap' ? 'radio' : 'checkbox'} group={category} name={category} value={textValue} onChange={handleInput}/>
                <label htmlFor={idval}>{textValue}</label>
            </div>
        </>
    )
}

export default Radio