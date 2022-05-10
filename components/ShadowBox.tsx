import styled from '@emotion/styled';

interface ShadowBoxProps {
  borderRadius?: string;
  margin?: string;
  width: string;
  height: string;
}

const ShadowBox = styled.div<ShadowBoxProps>`
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  border-radius: ${(props) => props.borderRadius || '1.6rem'};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.colors.normalWhite};
`;

export default ShadowBox;
