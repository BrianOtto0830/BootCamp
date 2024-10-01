import React from 'react';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export const Card = ({ title, content, author }) => {
  return (
    <div className="Card mb-4">
      <CardHeader title={title} />
      <CardBody content={content} />
      <CardFooter author={author} />
    </div>
  );
};
