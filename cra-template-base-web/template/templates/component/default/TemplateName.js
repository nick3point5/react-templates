import React from 'react';
import './TemplateName.css';

function TemplateName (props) {
  const { variant = 'primary', children, ...rest } = props
  return (
    <div className={`TemplateName ${variant}`} {...rest}>
      {children}
    </div>
  )
}

export default TemplateName