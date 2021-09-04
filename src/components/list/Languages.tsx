import * as React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: bolder;
  margin-top: 10px;
  margin-bottom: 2px;
`;

const Level = styled.div`
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: 100;

  @media print {
    font-weight: 300;
  }
`;

type Language = {
  name: string;
  level: string;
};

type Props = {
  languages: Language[];
};

const Languages = ({ languages }: Props) => {
  return <>
    {languages.map(({ name, level }) => (
      <div key={name}>
        <Name>{name}</Name>
        <Level>{level}</Level>
      </div>
    ))}
  </>;
}

export default Languages;
