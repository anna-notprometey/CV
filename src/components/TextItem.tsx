import * as React from 'react';
import styled from 'styled-components';

const Name = styled.h2`
  font-size: ${({ theme }) => theme.blockNameSize};
  margin: ${({ theme }) => theme.nameMargin};
  padding: ${({ theme }) => theme.namePadding};
  text-transform: uppercase;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.smallFontSize};
  margin-bottom: 1rem;
  display: block;
`;

const Container = styled.div`
  padding-left: 0;
`;

type Props = {
  name: string
  links: { href: string; text: string }[]
  className;
};

const TextItem = ({ name, links, className }: Props) => {
  return (
    <section className={className}>
      <Name>{name}</Name>

      <Container>
        {!!links?.length && links.map(({ href, text }) => (<Link key={href} rel="noopener" href={href} target="_blank">{text}</Link>))}
      </Container>
    </section>
  );
}

export default TextItem;