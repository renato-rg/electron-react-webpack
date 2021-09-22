import * as React from 'react';
import './styles.css';

export interface LinkProps {
  to: string;
  children: React.ReactChild;
}

export function Link(props: LinkProps) {
  const onClick = () => {
    console.log('should redirect to some link');
  };

  return <a href='#' onClick={onClick} className='link' >
    {props.children}
  </a>;
}
