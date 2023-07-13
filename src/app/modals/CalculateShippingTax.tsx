import * as Ariakit from '@ariakit/react';
import country from 'country-list-js';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import styled from 'styled-components/macro';
import { Icon } from 'app/components/Icon';
import { Button } from 'app/components/Button';
import { Toast } from 'app/components/Toast';
import Tag from 'app/components/Tag';
import { useState } from 'react';

export default function CalculateShippingTax({ dialog }) {
  interface Country {
    name: string;
    iso2: string;
  }
  interface Countries extends Array<Country> {}

  const defaultCountry = {
    name: 'United States',
    iso2: 'US',
  };

  let all: Countries = [];
  const allValues: Countries = Object.values(country.all);

  allValues.forEach(el => {
    all.push({ name: el.name, iso2: el.iso2 });
  });

  all.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const [currentCountry, setCurrentCountry] = useState({
    name: defaultCountry.name,
    iso2: defaultCountry.iso2,
  });

  const select = Ariakit.useSelectStore({
    defaultValue: defaultCountry.name,
    setValue: value => {
      const found: any = all.find(el => {
        return el.name === value && el.iso2;
      });
      setCurrentCountry({
        name: value,
        iso2: found.iso2,
      });
    },
  });

  const form = Ariakit.useFormStore({
    defaultValues: { country: defaultCountry.name, zip: '' },
  });

  // form.useSubmit(async state => {
  //   alert(JSON.stringify(state.values));
  // });

  return (
    <>
      <Ariakit.Form
        store={form}
        aria-labelledby="calculate-shipping"
        className="flex flexColumn flexGap4 addBottom6"
      >
        <div className="field">
          <Ariakit.FormLabel name={form.names.country}>
            Country
          </Ariakit.FormLabel>
          <Ariakit.Select
            store={select}
            className="select"
            render={
              <div>
                <i
                  className={`fi fi-${currentCountry.iso2.toLocaleLowerCase()}`}
                ></i>
                <span>{currentCountry.name}</span>
                <Icon src="icons/unfold_more.svg" size={14} />
              </div>
            }
          />
          <Ariakit.SelectPopover store={select} sameWidth className="popover">
            {all &&
              all.map((el, index) => (
                <Ariakit.SelectItem
                  className="option"
                  value={el.name}
                  render={
                    <div>
                      <span
                        className={`fi fi-${el.iso2.toLocaleLowerCase()}`}
                      ></span>
                      <span>{el.name}</span>
                    </div>
                  }
                  key={index}
                />
              ))}
          </Ariakit.SelectPopover>
          <Ariakit.FormError name={form.names.country} className="error" />
        </div>

        <div className="flex flexAlignEnd flexGap4 fullwidth">
          <div className="field flexGrow0">
            <Ariakit.FormLabel name={form.names.zip}>
              ZIP Code
            </Ariakit.FormLabel>

            <Ariakit.FormInput
              name={form.names.zip}
              placeholder=""
              className="input size100"
              required
            />
          </div>

          <div className="field flexGrow1">
            <Ariakit.FormSubmit>
              <Button name="Calculate" color="beta" fullwidth={true}></Button>
            </Ariakit.FormSubmit>
          </div>
        </div>
      </Ariakit.Form>

      <Toast
        name="Summary"
        variant="MD"
        closable={false}
        collapsable={false}
        className="addBottom6"
      >
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
              <Cell className="flex flexGap5">
                <span>Value Shipping</span>
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
              <Cell>
                <strong>Grand Total</strong>
              </Cell>
              <Cell align="right">
                <Tag name="$2,750.93" color="delta" />
              </Cell>
            </Row>
          </tbody>
        </Table>
      </Toast>

      <Button
        name="Close"
        color="white"
        fullwidth={true}
        inversed={true}
        onClick={() => dialog.hide()}
      ></Button>
    </>
  );
}

const Table = styled.table`
  width: 100%;
  font-size: inherit;
`;

const Row = styled.tr``;

const Cell = styled.td`
  text-align: ${props => props.align || 'left'};
`;
