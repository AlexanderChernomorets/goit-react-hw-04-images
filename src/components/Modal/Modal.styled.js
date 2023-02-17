import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;

  backdrop-filter: sepia(90%);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalWrapper = styled.div`
  width: 50%;
  display: contents;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  @media screen and (min-width: 768px) {
    .wrapper {
      padding: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    .wrapper {
      padding: 30px;
    }
  }
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 70%;
  padding: 0 auto;
`;
