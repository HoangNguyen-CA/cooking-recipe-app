import styled from 'styled-components';
import Label from '../Forms/Label';

export const Header = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3em;
  width: 100%;
`;

export const Container = styled.div`
  margin-bottom: 0.8em;
  display: flex;
  flex-wrap: wrap;
`;

export const SideLabel = styled(Label)`
  margin: 0 0 0 0.3em;
`;

export const BoxGroup = styled.div`
  display: flex;
  margin-right: 1em;
  margin-bottom: 0.3em;
  align-items: center;
`;
