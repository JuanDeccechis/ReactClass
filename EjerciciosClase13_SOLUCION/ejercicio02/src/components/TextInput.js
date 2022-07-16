import React from 'react'

const InputFeedback = ({ error }) =>
  error ? <div className="input-error">{error}</div> : null

const Label = ({ error, children, ...props }) => {
  return <label {...props}>{children}</label>
}

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className = '',
  ...props
}) => {
  const classes = `form-group ${className}`
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  )
}

export default TextInput
