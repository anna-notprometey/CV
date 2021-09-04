import * as React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  font-size: ${({ theme }) => theme.bigFontSize};
  
  @media print {
    text-align: justify;
  }
  
  @media screen and (max-width: 768px) {
    text-align: justify;
  }
`;

type Props = {
  name: string;
  article: string;
  className;
};

const Headers = ({ name, article, className }: Props) => {
  return (
    <header className={className}>
      <h1>{name}</h1>
      <Article>
        {article}
      </Article>
    </header>
  );
}

export default Headers;
