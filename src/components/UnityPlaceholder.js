import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styled from "styled-components";

const unityContext = new UnityContext({
  loaderUrl: "Build/BuildTour.loader.js",
  dataUrl: "Build/BuildTour.data",
  frameworkUrl: "Build/BuildTour.framework.js",
  codeUrl: "Build/BuildTour.wasm",
});

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 400px;
  
  @media screen and (min-width: 600px) {
    width: 480px;
    height: 270px;
  }

  @media screen and (min-width: 720px) {
    width: 512px;
    height: 288px;
  }

  @media screen and (min-width: 1024px) {
    width: 768px;
    height: 432px;
  }

  @media screen and (min-width: 1200px) {
    width: 1024px;
    height: 576px;
  }

  @media screen and (min-width: 1900px) {
    width: 1536px;
    height: 864px;
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

function UnityPlaceholder() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    unityContext.on("loaded", () => {
      setIsLoading(true);
    });
    unityContext.on("customEvent", function () {});
    return function () {
      unityContext.removeAllEventListeners();
    };
  }, []);
  return (
    <Container>
      <PortraitOrientation>
        <StyledSpan>
          Aplikacja dla urządzeń mobilnych działa tylko w trybie horyzontalnym,
          obróć telefon, aby uruchomić aplikacje
        </StyledSpan>
      </PortraitOrientation>
      <UnityWrapper>
        <Unity
          unityContext={unityContext}
          style={{
            margin: "0 auto",
            width: "100%",
            height: "100%",
            background: "#111",
          }}
        />
        {!isLoading ? (
          <SpinnerWrapper>
            <div className="loader">...</div>
            <StyledSpan>Ładowanie, prosze czekać...</StyledSpan>
          </SpinnerWrapper>
        ) : null}
      </UnityWrapper>
    </Container>
  );
}

export default UnityPlaceholder;
