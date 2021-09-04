import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  margin-bottom: 10px;
`;

const Name = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: bolder;
  margin-top: 10px;
  margin-bottom: 2px;
`;

const Address = styled.div`
  font-size: ${({ theme }) => theme.normalFontSize};
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.normalFontSize};
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: ${({ theme }) => theme.linkHoverColor};
  }

  @media print {
    & svg {
      display: none;
    }
  }
`;

type Contact = {
  name: string;
  label: string;
  link: string;
};

type Props = {
  contacts: Contact[];
  address: string;
};

const Contacts = ({ contacts, address }: Props) => {
  return (
    <Container>
      <div>
        <Name>Address</Name>
        <Address>{address}</Address>
      </div>

      {contacts.map(({ name, label, link }) => (
        <div key={name}>
          <Name>{name}</Name>
          <div>
            <Link target="_blank" rel="noopener" href={link}>
              {label}
              <FontAwesomeIcon style={{ paddingLeft: 5 }} icon={faExternalLinkAlt} size="sm" />
            </Link>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Contacts;
