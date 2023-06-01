import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

export function CartPage() {
  return (
    <>
      <Helmet>
        <title>Checkout</title>
        <meta name="description" content="Checkout / My Cart" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <div>123</div>
      </PageWrapper>
    </>
  );
}
