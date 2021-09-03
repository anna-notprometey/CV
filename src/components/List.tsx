import * as React from 'react';
import styled from 'styled-components';

const Name = styled.h2`
  font-size: ${({ theme }) => theme.blockNameSize};
  margin: ${({ theme }) => theme.nameMargin};
  padding: ${({ theme }) => theme.namePadding};
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.sideBorderColor};

  @media print {
    border-bottom: none;
  }
`;

const Container = styled.div`
  padding-left: 1rem;
`;

type Props = {
  name: string;
  children: React.ReactElement;
  className;
};

const List = ({ name, children, className }: Props) => {
  return (
    <section className={className}>
      <Name>{name}</Name>

      <Container>
        {children}
      </Container>
    </section>
  );
}

export default List;
