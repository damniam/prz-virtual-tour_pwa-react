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

  @media screen and (max-width: 992px) {
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

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -100px;
  color: var(--clr-white);

  span {
    flex: 1;
    display: inline-block;
    font-weight: bold;
    padding: 1rem;
  }
`;


function UnityPlaceholder() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    unityContext.on("progress", function (progression) {});
    unityContext.on("loaded", () => {setIsLoading(true);
    console.log('Loaded')});
    unityContext.on("customEvent", function () {});
    return function () {
      unityContext.removeAllEventListeners();
    };
  }, []);
  return (
    <Container>
        <Unity
          unityContext={unityContext}
          style={{
            height: "100%",
            width: "100%",
            background: "#111",
            // border: "1px solid rgba(255, 255, 255, .5)",
            // #231F20
          }}
          />
      {!isLoading ? (
        <SpinnerWrapper>
          <div className="loader">Loading...</div>
          <span>Ładowanie, prosze czekać...</span>
        </SpinnerWrapper>
      ) : null}
    </Container>
  );
}

export default UnityPlaceholder;
