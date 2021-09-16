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
  height: 788px;
  background-color: blue;
  padding: 10px;
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
            border: "2px solid black",
            background: "grey",
          }}
        />
      </Container>
    );
}

export default UnityPlaceholder;
