import { PropsWithChildren } from 'react';
import './Card.css';

type Props = PropsWithChildren & {className?: string};

export const Card = (props: Props) => {
  const classes = `card ${props.className}`;

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}