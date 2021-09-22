import * as React from 'react'
import './styles.css'

export interface LogoProps {
  src: string;
  alt?: string;
}

export function Logo(props: LogoProps) {
  return <img src={props.src} className='logo' alt={props.alt} />;
}
