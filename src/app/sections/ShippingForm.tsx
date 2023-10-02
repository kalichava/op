import * as Ariakit from '@ariakit/react';
import country from 'country-list-js';
import states from 'app/assets/us-states.json';
import '/node_modules/flag-icons/css/flag-icons.min.css';
// import styled from 'styled-components/macro';
// import { Icon } from 'app/components/Icon';
import { Button } from 'app/components/Button';
import { useState } from 'react';

export default function CalculateShippingTax() {
  interface Country {
    name: string;
    iso2: string;
  }

  interface Countries extends Array<Country> {}

  const defaultCountry = {
    name: 'Bosnia and Herzegovina',
    iso2: 'BA',
  };

  const allStates: Array<string> = states;

  let all: Countries = [];
  const allValues: Countries = Object.values(country.all);

  allValues.forEach((el, idx) => {
    if (idx < 10) {
      all.push({ name: el.name, iso2: el.iso2 });
    }
  });

  all.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const [currentCountry, setCurrentCountry] = useState({
    name: defaultCountry.name,
    iso2: defaultCountry.iso2,
  });

  const [currentState, setCurrentState] = useState(allStates[0]);

  const selectCountry = Ariakit.useSelectStore({
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

  const selectState = Ariakit.useSelectStore({
    defaultValue: allStates[0],
    setValue: value => {
      setCurrentState(value);
    },
  });

  const form = Ariakit.useFormStore({
    defaultValues: {
      country: defaultCountry.name,
      zip: 10871,
      nickname: '',
      firstName: '',
      lastName: '',
      streetAddress: '',
      state: '',
      city: '',
      phone: '',
      ext: '',
    },
  });

  // form.useSubmit(async state => {
  //   alert(JSON.stringify(state.values));
  // });

  return (
    <>
      <Ariakit.Form
        store={form}
        aria-labelledby="calculate-shipping"
        className="flex flexColumn flexGap6 addBottom6"
      >
        {/* nickname */}
        <div className="flex fullwidth">
          <div className="field flexGrow1">
            <Ariakit.FormLabel name={form.names.nickname}>
              Nickname
            </Ariakit.FormLabel>

            <Ariakit.FormInput
              name={form.names.nickname}
              placeholder="Ex: 'Home'"
              className="input"
              required
            />
          </div>
        </div>

        {/* country, zip*/}
        <div className="flex flexGap4 fullwidth">
          <div className="field flexGrow1">
            <Ariakit.FormLabel name={form.names.country}>
              Country
            </Ariakit.FormLabel>
            <Ariakit.Select
              store={selectCountry}
              className="select"
              render={
                <div>
                  <i
                    className={`fi fi-${currentCountry.iso2.toLocaleLowerCase()}`}
                  ></i>
                  <span>{currentCountry.name}</span>
                  <div className="arrows">
                    <span className="arrow">
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                </div>
              }
            />
            <div>
              <small className="secondaryInputText">
                For APO/FPO/DPO addresses use United States
              </small>
            </div>
            <Ariakit.SelectPopover
              store={selectCountry}
              sameWidth
              className="popover"
            >
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
        </div>

        {/* first name, last name */}
        <div className="flex flexGap4 fullwidth">
          <div className="field flexGrow1 halfWidth">
            <Ariakit.FormLabel name={form.names.firstName}>
              First Name
            </Ariakit.FormLabel>

            <Ariakit.FormInput
              name={form.names.firstName}
              placeholder=""
              className="input"
              required
            />
          </div>
          <div className="field flexGrow1 halfWidth">
            <Ariakit.FormLabel name={form.names.lastName}>
              Last Name
            </Ariakit.FormLabel>

            <Ariakit.FormInput
              name={form.names.lastName}
              placeholder=""
              className="input"
              required
            />
          </div>
        </div>

        {/* street address */}
        <div className="flex flexGap4 fullwidth">
          <div className="field flexGrow1">
            <Ariakit.FormLabel name={form.names.streetAddress}>
              Street Address
            </Ariakit.FormLabel>

            <Ariakit.FormInput
              name={form.names.streetAddress}
              placeholder=""
              className="input"
              required
            />
          </div>
        </div>

        {/* state, city */}
        <div className="flex flexGap4 fullwidth">
          <div className="field flexGrow1 halfWidth">
            <Ariakit.FormLabel name={form.names.state}>State</Ariakit.FormLabel>
            <Ariakit.Select
              store={selectState}
              className="select"
              render={
                <div>
                  <span>{currentState}</span>
                  <div className="arrows">
                    <span className="arrow">
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                </div>
              }
            />
            <Ariakit.SelectPopover
              store={selectState}
              sameWidth
              className="popover"
            >
              {allStates.map((el, index) => (
                <Ariakit.SelectItem
                  className="option"
                  value={el}
                  render={
                    <div>
                      <span>{el}</span>
                    </div>
                  }
                  key={index}
                />
              ))}
            </Ariakit.SelectPopover>
            <Ariakit.FormError name={form.names.state} className="error" />
          </div>

          <div className="field flexGrow1 halfWidth">
            <Ariakit.FormLabel name={form.names.city}>City</Ariakit.FormLabel>

            <Ariakit.FormInput
              name={form.names.city}
              placeholder=""
              className="input"
              required
            />
            <div>
              <small className="secondaryInputText">or APO/FPO/DPO</small>
            </div>
          </div>
        </div>

        {/* phone, ext */}
        <div className="flex flexGap4 fullwidth">
          <div className="field flexGrow1 halfWidth">
            <Ariakit.FormLabel name={form.names.phone}>
              Phone Number
            </Ariakit.FormLabel>

            <Ariakit.FormInput
              name={form.names.phone}
              placeholder=""
              className="input"
              required
            />
          </div>

          <div className="field flexGrow1 halfWidth">
            <Ariakit.FormLabel name={form.names.ext}>Ext.</Ariakit.FormLabel>

            <Ariakit.FormInput
              name={form.names.ext}
              placeholder=""
              className="input size100"
              required
            />
          </div>
        </div>

        {/* radio buttons */}
        <div className="flex flexColumn fullwidth">
          <Ariakit.RadioProvider>
            <Ariakit.RadioGroup className="radiogroup">
              <label className="label">
                <Ariakit.Radio className="radio" value="Spin Editor" />
                <span className="mark"></span>
                <span className="name">Spin Editor</span>
              </label>
              <label className="label">
                <Ariakit.Radio className="radio" value="Text Box" />
                <span className="mark"></span>
                <span className="name">Text Box</span>
              </label>
              <label className="label">
                <Ariakit.Radio className="radio" value="Time Editor" />
                <span className="mark"></span>
                <span className="name">Time Editor</span>
              </label>
              <label className="label">
                <Ariakit.Radio className="radio" value="Token Box" />
                <span className="mark"></span>
                <span className="name">Token Box</span>
              </label>
              <label className="label">
                <Ariakit.Radio className="radio" value="Track Bar" />
                <span className="mark"></span>
                <span className="name">Track Bar</span>
              </label>
              <label className="label">
                <Ariakit.Radio className="radio" value="Validation Summary" />
                <span className="mark"></span>
                <span className="name">Validation Summary</span>
              </label>
            </Ariakit.RadioGroup>
          </Ariakit.RadioProvider>
        </div>

        {/* checkboxes */}
        <div className="flex flexGap4 fullwidth checkboxgroup">
          <label className="label">
            <Ariakit.Checkbox className="checkbox" />
            <span className="mark"></span>
            <span className="name">
              I have read and agree to the terms and conditions
            </span>
          </label>
        </div>

        {/* buttons */}
        <div className="flex flexGap4 fullwidth addTop6">
          <div className="field flexGrow0">
            <Button
              href="#cancel"
              tabindex="11"
              name="Cancel"
              color="white"
              fullwidth={false}
              inversed={true}
            ></Button>
          </div>
          <div className="field flexGrow1">
            <Button
              href="#save"
              icon={{ name: 'save', position: 'left' }}
              tabindex="12"
              name="Save Address"
              color="alpha"
              fullwidth={true}
              inversed={false}
            ></Button>
          </div>
        </div>
      </Ariakit.Form>
    </>
  );
}
