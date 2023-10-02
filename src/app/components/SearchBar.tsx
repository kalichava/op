import * as React from 'react';
import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';

export function SearchBar() {
  return (
    <Wrapper>
      <SearchInput
        type="search"
        placeholder="Search by product, brand, category..."
      ></SearchInput>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${DT.COLOR_BACKGROUND_LIGHTER};
  padding: ${DT.SPACE_2} ${DT.SPACE_4} ${DT.SPACE_5} ${DT.SPACE_4};
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 99px;
  border: 1px solid ${DT.COLOR_BORDER};
  outline: none;
  padding: ${DT.SPACE_4} ${DT.SPACE_6};
`;
