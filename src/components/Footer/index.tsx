'use client';

import Image from 'next/image';

import Footer, {
  FooterHeader,
  FooterMain,
  SectionMain,
  ContactInfoWrapper,
  FootNote,
} from './styles';

const Index = () => {
  return (
    <Footer>
      <FooterHeader>
        <Image src="/logo.png" width={240} height={50} alt="Logo Leadster" />
        <p>Transformando visitantes em clientes.</p>
      </FooterHeader>
      <FooterMain>
        <SectionMain>
          <h5>Links Principais</h5>
          <a href="#">Home</a>
          <a href="#">Ferramenta</a>
          <a href="#">Preços</a>
          <a href="#">Contato</a>
        </SectionMain>
        <SectionMain>
          <h5>Cases</h5>
          <a href="#">Geração de Leads B2B</a>
          <a href="#">Geração de Leads em Software</a>
          <a href="#">Geração de Leads em Imobiliária</a>
          <a href="#">Cases de Sucesso</a>
        </SectionMain>
        <SectionMain>
          <h5>Materiais</h5>
          <a href="#">Blog</a>
          <a href="#">Parceria com Agências</a>
          <a href="#">Guia Definitivo do Marketing</a>
          <a href="#">Materiais Gratuitos</a>
        </SectionMain>
        <SectionMain>
          <h5>Siga a Leadster</h5>
          <div>
            <a
              href="https://www.linkedin.com/company/getleadster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin-icon.png"
                width={40}
                height={40}
                alt="Leadster LinkedIn"
              />
            </a>
            <a
              href="https://www.facebook.com/leadsterplatform/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook-icon.png"
                width={40}
                height={40}
                alt="Leadster LinkedIn"
              />
            </a>
            <a
              href="https://www.instagram.com/leadster.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram-icon.png"
                width={40}
                height={40}
                alt="Leadster LinkedIn"
              />
            </a>
          </div>
          <ContactInfoWrapper>
            <span>
              Email: <a href="#">contato@leadster.com.br</a>
            </span>
            <span>
              Telefone: <a href="#">(42) 98828-9851</a>
            </span>
          </ContactInfoWrapper>
        </SectionMain>
      </FooterMain>
      <FootNote>
        <p>
          Copyright &copy; 2015 - 2022 Todos os direitos
          reservados&nbsp;&nbsp;|&nbsp;&nbsp;
          <span>Leadster</span>
        </p>
        <p>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP:
          80010-00&nbsp;&nbsp;|&nbsp;&nbsp;Termos de uso
        </p>
      </FootNote>
    </Footer>
  );
};

export default Index;
