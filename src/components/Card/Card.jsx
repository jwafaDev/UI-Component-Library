import React from 'react';
import styles from './Card.module.css';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Header = ({ children, className = '' }) => (
  <div className={`${styles.header} ${className}`}>{children}</div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`${styles.body} ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`${styles.footer} ${className}`}>{children}</div>
);

Card.displayName = 'Card';
