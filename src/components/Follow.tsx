import * as React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const Block = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
`;

const Link = styled.a`
  text-align: center;

  &:hover, &:active {
    background-color: ${({ theme }) => theme.sideBorderColor};
  }
`;

type Props = {
  links: { href: string; icon:IconDefinition }[];
  className;
};

const Follow = ({ links, className }: Props) => {
  return (
    <Block className={className}>
      {links.map(({ href, icon }) => (
        <Link key={href} target="_blank" rel="noopener" href={href}><FontAwesomeIcon role="img" aria-label={icon.iconName} icon={icon} size="2x" /></Link>)
      )}
    </Block>
  );
}

export default Follow;