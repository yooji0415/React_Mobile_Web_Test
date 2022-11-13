import styled from "styled-components";

const StartPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #ffe99c;
`;

const OauthButton = styled.button`
  background-color: transparent;
  border: none;
  width: 12.5rem;
  height: 3.5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export { StartPageContainer, OauthButton };
