import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { Button } from 'app/components/Button';

export default function Sharing() {
  return (
    <Wrapper>
      <div>
        <Button
          name="Share This Page"
          color="beta"
          size="SM"
          rounded={true}
          icon={{ name: 'share', position: 'left' }}
        />
      </div>
      <div>
        <Button
          name="Copy Link"
          color="white"
          size="SM"
          rounded={true}
          inversed={true}
          icon={{ name: 'content_copy', position: 'right' }}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: ${DT.SPACE_3};
  padding: ${DT.SPACE_5} ${DT.SPACE_6};
`;
