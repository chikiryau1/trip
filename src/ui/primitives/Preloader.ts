import styled, {keyframes} from 'styled-components'

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 70px);
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: ${loadingAnimation} 1.1s linear infinite;
`