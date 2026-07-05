import React from 'react';
import styles from './Input.module.css';

export const Input = React.forwardRef(({
  type = 'text',
  placeholder,
  error = false,
  disabled = false,
  size = 'md',
  className = '',
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`${styles.input} ${styles[size]} ${error ? styles.error : ''} ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';
