import { styled } from 'styled-components';

const Footer = styled.footer`
  padding: 1rem;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-flow: row wrap;
`;

export const FooterHeader = styled.header`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  > p {
    font-size: 0.9rem;
    font-weight: 100;
    color: ${({ theme }) => theme.palette.gray.dark};
  }
`;

export const FooterMain = styled.main`
  padding-left: 3rem;
  padding-right: 3rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const SectionMain = styled.section`
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;

  > div {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    gap: 1.5rem;
  }

  h5 {
    margin-bottom: 2.75rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.palette.gray.dark};
  }

  img {
    border-radius: 45%;
  }
`;

export const ContactInfoWrapper = styled.aside`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  > span {
    width: 100%;
    font-size: 0.95rem;
    font-weight: 300;
    margin-bottom: 1rem;

    a {
      font-size: 0.9rem;
      font-weight: 400;
      color: ${({ theme }) => theme.palette.gray.dark};
    }
  }
`;

export const FootNote = styled.footer`
  padding: 1rem 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.gray.dark};

  p {
    > span {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export default Footer;
