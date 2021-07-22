import styled from 'styled-components';
import Label from '../Forms/Label';

export const Header = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em 1em;
  margin-bottom: 1em;
`;

export const SideLabel = styled(Label)`
  margin: 0 0 0 0.3em;
`;

export const BoxGroup = styled.div`
  display: flex;
  align-items: center;
`;
