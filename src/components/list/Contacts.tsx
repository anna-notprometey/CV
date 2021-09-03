import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Name = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.bigFontSize};
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
    <>
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
    </>
  );
}

export default Contacts;
