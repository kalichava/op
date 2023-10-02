import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { DesignTokens as DT } from 'styles/DesignTokens';

import { NavBar } from 'app/components/NavBar';
import { SearchBar } from 'app/components/SearchBar';
import Breadcrumbs from 'app/components/Breadcrumbs';

import Footer from 'app/sections/Footer';
import ShippingForm from 'app/sections/ShippingForm';

import Section from 'app/components/Section/Section';

export function FormPage() {
  return (
    <Page>
      <Helmet>
        <title>Form Tester</title>
        <meta name="description" content="Checkout / Form Tester" />
      </Helmet>

      <NavBar />

      <SearchBar />

      <ContentWrapper>
        <Section>
          <ShippingForm />
        </Section>
      </ContentWrapper>

      <Breadcrumbs />

      <Footer />
    </Page>
  );
}

const Page = styled.div`
  position: relative;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  max-width: ${DT.DEVICE_WIDTH};
  left: calc(50% + 8px);
  transform: translateX(-50%);
`;

const ContentWrapper = styled.div`
  background-color: white;
  padding: 16px;
`;
