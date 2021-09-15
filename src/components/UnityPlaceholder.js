import React, { useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import "./UnityPlaceholder.css"
const unityContext = new UnityContext({
  loaderUrl: "Build/BuildTour.loader.js",
  dataUrl: "Build/BuildTour.data",
  frameworkUrl: "Build/BuildTour.framework.js",
  codeUrl: "Build/BuildTour.wasm",
});


function UnityPlaceholder() {
    
    
     useEffect(function () {
       unityContext.on("progress", function (progression) {});
       unityContext.on("customEvent", function () {});
       return function () {
         unityContext.removeAllEventListeners();
       };
     }, []);
  
    return (
      <div className="container">
        <Unity
          unityContext={unityContext}
          style={{
            height: "100%",
            width: "100%",
            border: "2px solid black",
            background: "grey",
          }}
        />
      </div>
    );
}

export default UnityPlaceholder;
