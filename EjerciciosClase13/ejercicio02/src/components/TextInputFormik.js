import React from 'react'

const InputFeedback = ({ children }) => (
  <span className="text-danger">{children}</span>
)

const Label = ({ error, children, ...props }) => {
  return <label {...props}>{children}</label>
}

const TextInput = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // tambien values, setXXXX, handleXXXX, dirty, etc.
  className = '',
  label,
  ...props
}) => {
  
  const classes = `form-group ${className}`
  return (
    <div className={classes}>
      
    </div>
  )
}

export default TextInput
