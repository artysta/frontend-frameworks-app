import styled from 'styled-components';
import { Colors } from './Colors';

export const Wrapper = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

export const PaginationContainer = styled.div`
  color: ${Colors.blue2};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    li {
      float: left;
      margin: 20px;
      transition: 0.5s;
      :hover {
        transition: 0.5s;
        cursor: pointer;
        color: ${Colors.gray2};
      }
    }
  }
`;