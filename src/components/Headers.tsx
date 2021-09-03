import * as React from 'react';

type Props = {
  name: string;
  article: string;
  className;
};

const Headers = ({ name, article, className }: Props) => {
  return (
    <header className={className}>
      <h1>{name}</h1>
      <article>
        {article}
      </article>
    </header>
  );
}

export default Headers;
