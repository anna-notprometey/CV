import * as React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  padding-left: 1rem;
  font-weight: 100;
`;

const ListItem = styled.li`
  margin-bottom: 0.2rem;
  font-size: ${({ theme }) => theme.normalFontSize};

  @media print {
    font-weight: 300;
  }
`;

type Props = {
  skills: string[];
};

const Skills = ({ skills }: Props) => {
  return (
      <List>
        {skills.map(skill => (<ListItem key={skill}>{skill}</ListItem>))}
      </List>
  );
}

export default Skills;
