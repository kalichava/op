import * as React from 'react';
import styled from 'styled-components/macro';
import { DesignTokens as DT } from '../../../styles/DesignTokens';
import { Helmet } from 'react-helmet-async';

import { NavBar } from 'app/components/NavBar';
import { SearchBar } from 'app/components/SearchBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { SectionHeader } from 'app/components/SectionHeader';
import { ListItem } from 'app/components/ListItem';
import { Button } from 'app/components/Button';
import { Icon } from 'app/components/Icon';

import { SavedForLater } from 'app/sections/SavedForLater';
import { MyWishlist } from 'app/sections/MyWishlist';
import { Related } from 'app/sections/Related';
import { CartItems } from 'app/sections/CartItems';
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
          <SectionBody>
            <Table>
              <tbody>
                <Row>
                  <Cell>Order Subtotal (10 Items)</Cell>
                  <Cell align="right">
                    <strong>$2,640.63</strong>
                  </Cell>
                </Row>
                <Row>
                  <Cell>Coupon</Cell>
                  <Cell align="right">
                    <strong className="colorDiscount">-$7.95</strong>
                  </Cell>
                </Row>
                <Row>
                  <Cell>
                    Value Shipping <a href="#change">Change</a>
                  </Cell>
                  <Cell align="right">
                    <strong className="colorDiscount">Free</strong>
                  </Cell>
                </Row>
                <Row>
                  <Cell>Est. Sales Tax (CA)</Cell>
                  <Cell align="right">
                    <strong>$88.90</strong>
                  </Cell>
                </Row>
                <Row>
                  <Cell>Grand Total</Cell>
                  <Cell align="right">
                    <TotalPrice>$2,750.93</TotalPrice>
                  </Cell>
                </Row>
              </tbody>
            </Table>
          </SectionBody>
          <SectionFooter>
            <div className="smaller flex flexCenter colorDiscount">
              <strong className="addRight2">You save $1,057.91 (27%)</strong>
              <Icon src="icons/info.svg" size={20}></Icon>
            </div>
            <div className="smaller flex flexCenter">
              <strong>
                You will get <span className="colorDiscount">$54.08</span> OP
                Bucks after items ship
              </strong>
            </div>
          </SectionFooter>
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
          <SectionBody>
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
            <div className="smaller light center">or</div>
            <Button
              name="Continue Shopping"
              icon={{ name: 'incoming_mail', position: 'left' }}
              fullwidth={true}
            />
          </SectionBody>
        </Section>

        {/* Have a coupon or gift Certificate? */}
        <Section>
          <SectionHeader name="Have a coupon or gift Certificate?" />
          <SectionBody>
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
          <SectionBody>
            <List>
              <ListItem
                name="$2.05 OP Bucks Applied to Your Order"
                icon="content_cut"
                // additionalIcon="chevron_right"
              ></ListItem>
            </List>
          </SectionBody>
        </Section>
      </PageWrapper>
    </>
  );
}

const Section = styled.div`
  margin-bottom: ${DT.SPACE_4};
  background-color: ${DT.COLOR_BACKGROUND_LIGHT};
`;

const List = styled.div``;

const SectionBody = styled.div`
  padding: ${DT.SPACE_4} 0;
`;

const SectionFooter = styled.div`
  padding: ${DT.SPACE_4} 0;
  border-top: 1px solid ${DT.COLOR_BORDER_LIGHT};
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  font-size: inherit;
  font-size: ${DT.FONT_SIZE_BODY_MD};
`;

const Row = styled.tr``;

const Cell = styled.td`
  text-align: ${props => props.align || 'left'};
  padding: ${DT.SPACE_0} ${DT.SPACE_6};
`;

const TotalPrice = styled.span`
  display: inline-block;
  background-color: ${DT.COLOR_DELTA};
  padding: 0 ${DT.SPACE_4};
  margin-right: -${DT.SPACE_4};
  font-weight: 600;
  color: white;
  border-radius: 99px;
`;
