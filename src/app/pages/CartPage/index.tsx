import { useState } from 'react';
import * as Ariakit from '@ariakit/react';
import { CartItemType } from 'types/Products';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { DesignTokens as DT } from 'styles/DesignTokens';

import { NavBar } from 'app/components/NavBar';
import { SearchBar } from 'app/components/SearchBar';
import { SectionHeader } from 'app/components/Section/SectionHeader';
import { SectionFooter } from 'app/components/Section/SectionFooter';
import { SectionBody } from 'app/components/Section/SectionBody';
import { ListItem } from 'app/components/ListItem';
import { Button } from 'app/components/Button';
import { Toast } from 'app/components/Toast';
import { Icon } from 'app/components/Icon';
import Breadcrumbs from 'app/components/Breadcrumbs';
import Sharing from 'app/components/Sharing';
import Dialog from 'app/components/Dialog';

import SavedForLater from 'app/sections/SavedForLater';
import MyWishlist from 'app/sections/MyWishlist';
import Related from 'app/sections/Related';
import CartItems from 'app/sections/CartItems';
import OrderSummary from 'app/sections/OrderSummary';
import Footer from 'app/sections/Footer';

import AdditionalSavings from 'app/modals/AdditionalSavings';
import CalculateShippingTax from 'app/modals/CalculateShippingTax';
import RetrieveYourCart from 'app/modals/RetrieveYourCart';
import Section from 'app/components/Section/Section';
import CheckoutWizardStep from 'app/modals/CheckoutWizardStep';
import HaveAnAccountStep from 'app/modals/HaveAnAccountStep';
import ContactEmailStep from 'app/modals/ContactEmailStep';
import ShippingAddressStep from 'app/modals/ShippingAddressStep';
import CreditCartStep from 'app/modals/CreditCartStep';
import ReviewStep from 'app/modals/ReviewStep';
import DocumentUploadStep from 'app/modals/DocumentUploadStep';
import GiftCertificateStep from 'app/modals/GiftCertificateStep';

const cartItemProducts: CartItemType[] = [
  {
    name: 'Grey Ghost Gear Large Range Bag',
    image: 'p4.jpeg',
    price: 18.9,
    oldPrice: 19.9,
    qty: 1,
    params: [
      {
        attr: 'Color',
        value: 'Black',
      },
      {
        attr: 'Weight',
        value:
          '0 - 0.49 grain, 0.7 oz, Example of the description in two lines',
      },
      {
        attr: 'Material',
        value: 'Alloy 9005',
      },
    ],
    badges: [
      {
        name: "Blazin' Deal",
        color: 'delta',
        icon: 'local_fire_department',
      },
      {
        name: 'Free Shipping',
        color: 'beta',
        icon: 'local_shipping',
      },
    ],
    opBucks: 0.34,
  },
  {
    name: 'Grey Ghost Gear Large Range Bag',
    image: 'p6.jpeg',
    price: 219,
    oldPrice: 234.55,
    qty: 2,
    params: [
      {
        attr: 'Color',
        value: 'Red',
      },
    ],
    badges: [
      {
        name: "Blazin' Deal",
        color: 'delta',
        icon: 'local_fire_department',
      },
    ],
    opBucks: 0.55,
  },
  {
    name: 'STNGR M-Lok Bipod Adapter Mount, Black, CQ-B1VU-D5JY',
    image: 'p7.jpeg',
    price: 544,
    oldPrice: 599.99,
    qty: 1,
    params: [
      {
        attr: 'Color',
        value: 'Green',
      },
    ],
    badges: [
      {
        name: 'On Sale',
        color: 'alpha',
        icon: 'content_cut',
      },
    ],
    opBucks: 1.09,
  },
  {
    name: 'Burris Xtreme Tactical Picatinny Style Rail 30mm Rings',
    image: 'p8.jpeg',
    price: 220,
    oldPrice: 245.9,
    qty: 1,
    badges: [
      {
        name: 'Free Shipping',
        color: 'beta',
        icon: 'local_shipping',
      },
    ],
    opBucks: 0.23,
  },
  {
    name: "Bob Allen 313 Premier Insulated Leather Gloves - Men's, Brown, XS, 1219",
    image: 'p9.jpeg',
    price: 47.99,
    oldPrice: 56.0,
    qty: 4,
    badges: [
      {
        name: "Blazin' Deal",
        color: 'delta',
        icon: 'local_fire_department',
      },
    ],
    opBucks: 1.15,
  },
  {
    name: "5.11 Tactical 3-in-1 Waterproof Parka - Men's, Range Red, Extra Large, 48001-477-XL",
    image: 'p10.jpeg',
    price: 99.99,
    oldPrice: 120,
    qty: 2,
    opBucks: 0.14,
  },
  {
    name: 'STNGR M-Lok Bipod Adapter Mount, Black, CQ-B1VU-D5JY',
    image: 'p11.jpeg',
    price: 180.9,
    oldPrice: 190.9,
    qty: 1,
    params: [
      {
        attr: 'Color',
        value: 'Black',
      },
      {
        attr: 'Weight',
        value:
          '0 - 0.49 grain, 0.7 oz, Example of the description in two lines',
      },
      {
        attr: 'Material',
        value: 'Alloy 9005',
      },
    ],
    badges: [
      {
        name: "Blazin' Deal",
        color: 'delta',
        icon: 'local_fire_department',
      },
      {
        name: 'Free Shipping',
        color: 'beta',
        icon: 'local_shipping',
      },
    ],
    opBucks: 0.9,
  },
];

export function CartPage() {
  const additionalSavingsDialog = Ariakit.useDialogStore({});
  const shippingAndTaxDialog = Ariakit.useDialogStore({});
  const retrieveYourCartDialog = Ariakit.useDialogStore({});
  const checkoutDialog = Ariakit.useDialogStore({});

  setTimeout(() => {
    if (savingsDialog) {
      additionalSavingsDialog.show();
      setSavingsDialog(false);
    }
  }, 2000);

  function handleChangeButtonClick() {
    shippingAndTaxDialog.show();
  }

  function handleCheckoutButtonClick() {
    checkoutDialog.show();
  }

  const [showCartCode, setShowCartCode] = useState(false);
  const [savingsDialog, setSavingsDialog] = useState(true);
  const [noteToast, setNoteToast] = useState(true);

  return (
    <Page>
      <Helmet>
        <title>My Cart</title>
        <meta name="description" content="Checkout / My Cart" />
      </Helmet>

      <NavBar />

      <SearchBar />

      <ContentWrapper>
        {/* Order Summary */}
        <Section>
          <SectionHeader name="Order Summary" />
          <OrderSummary
            handleChangeButtonClick={handleChangeButtonClick}
            handleCheckoutButtonClick={handleCheckoutButtonClick}
          />
        </Section>

        {/* Toasts */}
        <Section>
          <SectionBody>
            <div className="flex flexColumn flexGap6 addBottom4">
              <Toast
                name="Alternative Payment methods"
                icon="info"
                collapsable={true}
                closable={false}
                // color="beta"
                // variant="MD"
              >
                <div>
                  One or more of the items in your cart do not qualify for
                  Google Pay or PayPal, per gateway Acceptable Use Policies. We
                  apologize for the inconvenience. Please use our credit card
                  payment option.
                </div>
              </Toast>

              {noteToast && (
                <Toast
                  name="Please Note"
                  icon="warning"
                  collapsable={false}
                  closable={true}
                  color="epsilon"
                  // variant="MD"
                >
                  <div>
                    Governor JB Pritzker signed the Protect Illinois Communities
                    Act (HB5471) into law on January 10th, 2023, and it is
                    effective immediately for the entire state of Illinois. As a
                    result of this new law, our Illinois-based consumer
                    transactions containing items in this cart may be put on
                    hold, delayed, or canceled.
                    <ul>
                      <li>
                        <a href="#product">
                          <strong>
                            Triggertech Diamond Trigger, AR-15, Curved, 1.5 - 4
                            lbs, PVD Black, AR0-TRB-14-NNC -
                            554-ART-AR0TRB14NN-AR0-TRB-14-NNC
                          </strong>
                        </a>
                      </li>
                    </ul>
                    <Button
                      name="Okay. I’m Informed"
                      icon={{ name: 'check', position: 'left' }}
                      size="SM"
                      color="white"
                      inversed={true}
                      onClick={() => {
                        setNoteToast(false);
                      }}
                    />
                  </div>
                </Toast>
              )}
            </div>
          </SectionBody>
        </Section>

        {/* Items in Your Cart */}
        <Section>
          <CartItems products={cartItemProducts}></CartItems>
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
                onClick={() => {
                  retrieveYourCartDialog.setOpen(true);
                }}
              ></ListItem>
              {showCartCode ? (
                <div className="flex flexCenter flexGap4 addX6Inside addY4Inside">
                  <Icon src="icons/qr_code_scanner.svg" size={24} />
                  <div className="field flexGrow0">
                    <div className="input center bold size100">VH-9876</div>
                    {/* <Ariakit.FormInput
                      name={cartCodeForm.names.code}
                      placeholder=""
                      className="input center bold size100"
                      aria-disabled="true"
                      disabled
                      required
                    /> */}
                  </div>
                  <div className="field flexGrow1">
                    <Button
                      name="Copy to Clipboard"
                      icon={{
                        name: 'content_copy',
                        position: 'left',
                      }}
                      color="beta"
                      fullwidth={true}
                      onClick={() => {
                        setShowCartCode(false);
                      }}
                    ></Button>
                  </div>{' '}
                </div>
              ) : (
                <ListItem
                  name="Show Cart Code"
                  icon="qr_code_scanner"
                  additionalIcon="chevron_right"
                  onClick={() => {
                    setShowCartCode(true);
                  }}
                ></ListItem>
              )}
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
                additionalText="Add"
                additionalIcon="add_circle"
              ></ListItem>
              <ListItem
                name="Gift Certificate"
                icon="card_giftcard"
                additionalText="Add"
                additionalIcon="add_circle"
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
          <OrderSummary
            handleChangeButtonClick={handleChangeButtonClick}
            handleCheckoutButtonClick={handleCheckoutButtonClick}
          />
        </Section>
      </ContentWrapper>

      <Sharing />

      <Breadcrumbs />

      <Dialog
        dialog={additionalSavingsDialog}
        name="Take Advantage of Additional Savings"
      >
        <AdditionalSavings dialog={additionalSavingsDialog}></AdditionalSavings>
      </Dialog>

      <Dialog
        dialog={shippingAndTaxDialog}
        name="Calculate Shipping & Tax"
        color="beta"
      >
        <CalculateShippingTax
          dialog={shippingAndTaxDialog}
        ></CalculateShippingTax>
      </Dialog>

      <Dialog
        dialog={retrieveYourCartDialog}
        name="Retrieve Your Cart"
        color="beta"
      >
        <RetrieveYourCart dialog={retrieveYourCartDialog}></RetrieveYourCart>
      </Dialog>

      <Dialog dialog={checkoutDialog} name="Secure Checkout" size="LG">
        {/* Have an Account? */}
        <CheckoutWizardStep hide={false}>
          <>
            <SectionHeader
              name="Have an Account?"
              back={true}
              link={{
                title: '',
                url: '',
                icon: 'close',
              }}
              onClick={() => {
                console.log('onClick');
                checkoutDialog.setOpen(false);
              }}
            />
            <div className="add6Inside bgWhite borderBottomLight">
              <HaveAnAccountStep />
            </div>
          </>
        </CheckoutWizardStep>

        {/* Contact Email */}
        <CheckoutWizardStep step={1} hide={false}>
          <>
            <SectionHeader
              name="Contact Email"
              back={true}
              link={{
                title: '',
                url: '',
                icon: 'close',
              }}
              onClick={() => {
                console.log('onClick');
              }}
            />
            <div className="add6Inside bgWhite borderBottomLight">
              <ContactEmailStep />
            </div>
          </>
        </CheckoutWizardStep>

        {/* Shipping Address */}
        <CheckoutWizardStep step={2}>
          <>
            <SectionHeader
              name="Shipping Address"
              back={true}
              link={{
                title: '',
                url: '',
                icon: 'close',
              }}
              onClick={() => {
                console.log('onClick');
              }}
            />
            <div className="add6Inside bgWhite borderBottomLight">
              <ShippingAddressStep />
            </div>
          </>
        </CheckoutWizardStep>

        {/* Credit Card */}
        <CheckoutWizardStep step={3}>
          <>
            <SectionHeader
              name="Credit Card"
              back={true}
              link={{
                title: '',
                url: '',
                icon: 'close',
              }}
              onClick={() => {
                console.log('onClick');
              }}
            />
            <div className="add6Inside bgWhite borderBottomLight">
              <CreditCartStep />
            </div>
          </>
        </CheckoutWizardStep>

        {/* Review */}
        <CheckoutWizardStep step={4}>
          <>
            <SectionHeader
              name="Review"
              back={true}
              link={{
                title: '',
                url: '',
                icon: 'close',
              }}
              onClick={() => {
                console.log('onClick');
              }}
            />
            <div className="add6Inside bgWhite borderBottomLight">
              <ReviewStep />
            </div>
          </>
        </CheckoutWizardStep>

        {/* Document Upload */}
        <CheckoutWizardStep>
          <>
            <SectionHeader
              name="Document Upload"
              back={true}
              link={{
                title: '',
                url: '',
                icon: 'close',
              }}
              onClick={() => {
                console.log('onClick');
              }}
            />
            <div className="add6Inside bgWhite borderBottomLight">
              <DocumentUploadStep />
            </div>
          </>
        </CheckoutWizardStep>

        {/* Gift Certificate */}
        <CheckoutWizardStep>
          <>
            <SectionHeader
              name="Gift Certificate"
              back={true}
              link={{
                title: '',
                url: '',
                icon: 'close',
              }}
              onClick={() => {
                console.log('onClick');
              }}
            />
            <div className="add6Inside bgWhite borderBottomLight">
              <GiftCertificateStep />
            </div>
          </>
        </CheckoutWizardStep>
      </Dialog>

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

const List = styled.div``;

const ContentWrapper = styled.div`
  background-color: white;
`;
