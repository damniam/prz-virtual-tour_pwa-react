import React, { useEffect } from "react";
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
  width: 1366px;
  height: 768px;
`;


function UnityPlaceholder() {
  useEffect(function () {
    unityContext.on("progress", function (progression) {});
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
          // #231F20
        }}
      />
    </Container>
  );
}

export default UnityPlaceholder;
