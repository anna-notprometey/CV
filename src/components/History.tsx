import * as React from 'react';
import styled from 'styled-components';

const Name = styled.h2`
  font-size: ${({ theme }) => theme.blockNameSize};
  margin: ${({ theme }) => theme.nameMargin};
  padding: ${({ theme }) => theme.namePadding};
  text-transform: uppercase;
`;

const Container = styled.div`
  padding-left: 0;
`;

type Props = {
  name: string;
  children: React.ReactElement;
  className;
};

const History = ({ name, children, className }: Props) => {
  return (
    <section className={className}>
      <Name>{name}</Name>

      <Container>
        {children}
      </Container>
    </section>
  );
}

export default History;
