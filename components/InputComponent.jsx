import React from 'react'

const InputComponent = ({inputId, labelText, inputType, inputName, inputValue, setValue, ...props}) => {
  return (
    <div className='*:block'>
      <label className='mb-1 w-max' htmlFor={inputId}>{labelText}</label>
      <input
        className='bg-gray-50 border border-blue-200 px-1 py-1 rounded-md'
        type={inputType}
        id={inputId}
        name={inputName}
        value={inputValue}
        onChange={({target}) => setValue(target.value)}
        {...props}
      />
    </div>
  )
}

export default InputComponent
