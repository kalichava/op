import * as React from 'react';
import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { Helmet } from 'react-helmet-async';

import { NavBar } from 'app/components/NavBar';
import { SearchBar } from 'app/components/SearchBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { SectionHeader } from 'app/components/SectionHeader';
import { SectionFooter } from 'app/components/SectionFooter';
import { SectionBody } from 'app/components/SectionBody';
import { ListItem } from 'app/components/ListItem';
import { Button } from 'app/components/Button';

import { SavedForLater } from 'app/sections/SavedForLater';
import { MyWishlist } from 'app/sections/MyWishlist';
import { Related } from 'app/sections/Related';
import { CartItems } from 'app/sections/CartItems';
import { OrderSummary } from 'app/sections/OrderSummary';
import { Toast } from 'app/components/Toast';

// import { relative } from 'path';
// import { title } from 'process';

export function CartPage() {
  return (
    <>
      <Helmet>
        <title>My Cart</title>
        <meta name="description" content="Checkout / My Cart" />
      </Helmet>
      <NavBar />
      <SearchBar />
      <PageWrapper>
        {/* Order Summary */}
        <Section>
          <SectionHeader name="Order Summary" />
          <OrderSummary />
        </Section>

        {/* Toasts */}
        <Section>
          <SectionBody>
            <div className="addBottom5">
              <Toast
                name="Alternative Payment methods"
                icon="info"
                color="beta"
                variant="MD"
              >
                <div>
                  One or more of the items in your cart do not qualify for
                  Google Pay or PayPal, per gateway Acceptable Use Policies. We
                  apologize for the inconvenience. Please use our credit card
                  payment option.
                </div>
              </Toast>
            </div>
          </SectionBody>
        </Section>

        {/* Items in Your Cart */}
        <Section>
          <SectionHeader name="10 Items in Your Cart " />
          <CartItems></CartItems>
        </Section>

        {/* Saved for Later */}
        <Section>
          <SectionHeader
            name="Saved for Later"
            link={{ title: 'View All', url: '', icon: 'arrow_forward' }}
          />
          <SavedForLater></SavedForLater>
        </Section>

        {/* My Wishlist */}
        <Section>
          <SectionHeader
            name="My Wishlist"
            link={{
              title: 'All Wishlist Items',
              url: '',
              icon: 'arrow_forward',
            }}
          />
          <MyWishlist></MyWishlist>
        </Section>

        {/* My Wishlist */}
        <Section>
          <SectionHeader
            name="Related Products & Accessories"
            link={{
              title: 'View All',
              url: '',
              icon: 'arrow_forward',
            }}
          />
          <Related></Related>
        </Section>

        {/* Save or Retrieve Your Cart */}
        <Section>
          <SectionHeader name="Save or Retrieve Your Cart" />
          <SectionBody paddings={false}>
            <List>
              <ListItem
                name="Email & Save the Cart"
                icon="outgoing_mail"
                additionalIcon="chevron_right"
              ></ListItem>
              <ListItem
                name="Restore Your Cart"
                icon="incoming_mail"
                additionalIcon="chevron_right"
              ></ListItem>
              <ListItem
                name="Show Cart Code"
                icon="qr_code_scanner"
                additionalIcon="chevron_right"
              ></ListItem>
            </List>
          </SectionBody>
          <SectionFooter>
            <>
              <div className="smaller light center addBottom5">or</div>
              <Button
                name="Continue Shopping"
                icon={{ name: 'incoming_mail', position: 'left' }}
                color="beta"
                inversed={false}
                fullwidth={true}
              />
            </>
          </SectionFooter>
        </Section>

        {/* Have a coupon or gift Certificate? */}
        <Section>
          <SectionHeader name="Have a coupon or gift Certificate?" />
          <SectionBody paddings={false}>
            <List>
              <ListItem
                name="Coupon"
                icon="content_cut"
                additionalText="Delete"
                additionalIcon="delete_outline"
              ></ListItem>
              <ListItem
                name="Gift Certificate"
                icon="card_giftcard"
                additionalText="Delete"
                additionalIcon="delete_outline"
              ></ListItem>
            </List>
          </SectionBody>
        </Section>

        {/* Opticsplanet bucks */}
        <Section>
          <SectionHeader
            name="Opticsplanet bucks"
            link={{ title: 'How it Works', url: '', icon: 'help' }}
          />
          <SectionBody paddings={false}>
            <List>
              <ListItem
                name="$2.05 OP Bucks Applied to Your Order"
                icon="content_cut"
                // additionalIcon="chevron_right"
              ></ListItem>
            </List>
          </SectionBody>
        </Section>

        {/* Order Summary */}
        <Section>
          <SectionHeader name="Order Summary" />
          <OrderSummary />
        </Section>
      </PageWrapper>
    </>
  );
}

const Section = styled.div``;

const List = styled.div``;
