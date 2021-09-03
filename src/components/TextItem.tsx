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
  name: string
  text: string;
  links: { href: string; text: string }[]
  className;
};

const TextItem = ({ name, text, links, className }: Props) => {
  return (
    <section className={className}>
      <Name>{name}</Name>

      <Container>
        {!!links?.length && links.map(({ href, text }) => (<a key={href} rel="noopener" href={href} target="_blank">{text}</a>))}
        <div>{text}</div>
      </Container>
    </section>
  );
}

export default TextItem;