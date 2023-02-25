import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

function UnityPlaceholder() {
  const { unityProvider, requestFullscreen, isLoaded } = useUnityContext({
    loaderUrl: "app/app.loader.js",
    dataUrl: "app/app.data",
    frameworkUrl: "app/app.framework.js",
    codeUrl: "app/app.wasm",
  });

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <Placeholder>
      <Wrapper>
        <Container>
          <PortraitOrientation>
            <StyledSpan>
              Aplikacja dla urządzeń mobilnych działa tylko w trybie
              horyzontalnym, obróć telefon, aby uruchomić aplikacje
            </StyledSpan>
          </PortraitOrientation>
          <UnityWrapper>
            <Unity
              unityProvider={unityProvider}
              style={{
                margin: "0 auto",
                width: "100%",
                height: "100%",
                background: "#111",
              }}
            />
            {!isLoaded ? (
              <SpinnerWrapper>
                <div className='loader'>...</div>
                <StyledSpan>Ładowanie, prosze czekać...</StyledSpan>
              </SpinnerWrapper>
            ) : null}
          </UnityWrapper>
        </Container>
        {!isLoaded ? null : (
          <FullScreenBtn onClick={handleClickEnterFullscreen}>
            Pełny ekran
          </FullScreenBtn>
        )}
      </Wrapper>
    </Placeholder>
  );
}

export default UnityPlaceholder;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: min-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const FullScreenBtn = styled.button`
  font-weight: 700;
  font-size: 0.9rem;
  color: #ddd;
  background-color: #000;
  border: none;
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #0d0d0d;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 300px;
  height: 400px;

  @media screen and (min-width: 600px) {
    width: 429px;
    height: 241px;
  }

  @media screen and (min-width: 720px) {
    margin-top: 2rem;
    width: 607px;
    height: 342px;
  }

  @media screen and (min-width: 1024px) {
    width: 960px;
    height: 540px;
  }

  @media screen and (min-width: 1200px) {
    width: 1184px;
    height: 666px;
  }

  @media screen and (min-width: 1440px) {
    width: 1358px;
    height: 764px;
  }

  @media screen and (min-width: 1600px) {
    width: 1536px;
    height: 864px;
  }

  @media screen and (min-width: 1920px) {
    width: 1920px;
    height: 1080px;
  }
`;

const UnityWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media all and (max-width: 720px) and (orientation: portrait) {
    display: none;
  }
  @media all and (min-width: 720px) and (orientation: landscape) {
    display: flex;
  }
`;

const StyledSpan = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  top: 50%;
  margin-top: -150px;
  color: var(--clr-white);
  transform: scale(0.65);

  @media screen and (min-width: 1024px) {
    transform: scale(0.8);
  }
`;

const PortraitOrientation = styled.div`
  @media all and (max-width: 720px) and (orientation: portrait) {
    display: flex;
    color: white;
  }

  @media all and (max-width: 720px) and (orientation: landscape) {
    display: none;
    color: white;
  }

  @media all and (min-width: 720px) {
    display: none;
    color: white;
  }
`;
