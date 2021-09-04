import * as React from 'react';
import styled from 'styled-components';
import { DateTime, Interval } from 'luxon';
import humanizeDuration from 'humanize-duration';

const Info = styled.div`
  position: relative;

  &:before {
    content: "\\a0";
    position: absolute;
    right: -12px;
    top: 0;
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.primaryColor};
    padding-bottom: 1.6rem;
  }
  
  &:after {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: -20px;
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
  }
` ;

const Article = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.normalFontSize};
`;

const Container = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr 2fr;
  padding-top: 10px;
  padding-bottom: 10px;
  
  &:last-child {
    ${Info}:before {
      padding-bottom: 0;
    };
  }

  @media print {
    ${Article} {
      text-align: justify;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 15px;

    ${Info}:before {
      left: -12px;
    };

    ${Info}:after {
      left: -20px;
    };
    
    ${Article} {
      text-align: justify;
    }
    
    ${Article}: before {
      content: "\\a0";
      position: absolute;
      left: -12px;
      top: 0;
      width: 1px;
      height: 100%;
      background: ${({ theme }) => theme.primaryColor};
      padding-bottom: 1.6rem;
    };

    &:last-child {
      ${Info}:before {
        padding-bottom: 1.6rem;
      };

      ${Article}:before {
        padding-bottom: 0;
      };
    }
  }
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  font-weight: bolder;

  @media print {
    font-size: ${({ theme }) => theme.smallFontSize};
  }
`;

const Extra = styled.div`
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: 700;

  @media print {
    font-size: ${({ theme }) => theme.smallFontSize};
  }
`;

const Place = styled.div`
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: 400;

  @media print {
    font-size: ${({ theme }) => theme.smallFontSize};
  }
`;

const Date = styled.div`
  font-size: ${({ theme }) => theme.smallFontSize};
  font-weight: 300;
  font-style: italic;
`;

const Tools = styled.div`
  font-size: ${({ theme }) => theme.normalFontSize};
  font-style: italic;
  padding-top: 1rem;
`;

const Tool = styled.div`
  font-size: ${({ theme }) => theme.normalFontSize};
  font-style: italic;
  padding-top: 0;
  
  &:first-child {
    padding-top: 1rem;
  }
`;

type Item = {
  name: string;
  extra: string;
  place: string;
  date: {
    from: string;
    to?: string;
  };
  text: string;
  tools: string | string[];
};

type Props = {
  items: Item[];
  format?: string;
  duration?: boolean;
};

const getDuration = ({ from , to = DateTime.now().toFormat('dd.MM.yyyy') }) => humanizeDuration(Interval.fromDateTimes(DateTime.fromFormat(from, "dd.MM.yyyy"), DateTime.fromFormat(to, "dd.MM.yyyy")).toDuration().valueOf(), { maxDecimalPoints: 0, delimiter: " and ", units: ["y", "mo"] })

const getDate = (date, format) => {
  if (date) {
    return DateTime.fromFormat(date, "dd.MM.yyyy").setLocale('en').toFormat(format);
  }

  return 'Currently';
}

const Items = ({ items, format = 'LLL yyyy', duration = true }: Props) => {
  return (
    <>
      {items.map(({ name, extra, place, date, text, tools }) => (
        <Container key={name}>
          <Info>
            <Name>{name}</Name>
            <Extra>{extra}</Extra>
            <Place>{place}</Place>
            <Date>{getDate(date.from, format)} - {getDate(date.to, format)}</Date>
            {duration && <Date>{getDuration(date)}</Date>}
          </Info>
          <Article>
            {text}

            {Array.isArray(tools) ? tools.map(tool => (<Tool key={tool}>{tool}</Tool>)) : <Tools>{tools}</Tools> }
          </Article>
        </Container>
      ))}
    </>
  );
}

export default Items;
