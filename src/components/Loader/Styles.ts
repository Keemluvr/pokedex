import styled from "styled-components"

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.loaderBackground};
  width: 100vw;
  height: 100vh;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoaderImg = styled.img`
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pop 1.2s infinite;

  @keyframes pop {
    0% {
      transform: translate(-50%, -50%) scale(1.25, 0.75);
    }
    50% {
      transform: translate(-50%, -150%) scale(1, 1);
    }
    55% {
      transform: translate(-50%, -150%) rotate(15deg);
    }
    60% {
      transform: translate(-50%, -150%) rotate(-15deg);
    }
    65% {
      transform: translate(-50%, -150%) rotate(15deg);
    }
    70% {
      transform: translate(-50%, -150%) rotate(-15deg);
    }
    100% {
      transform: translate(-50%, -50%) scale(1.25, 0.75);
    }
  }
`
