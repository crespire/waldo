import { createPortal } from "react-dom";
import { useState, useLayoutEffect } from "react";

function ReactPortal({ children, className, wrapperID }) {
  const [wrapEl, setWrapEl] = useState(null);
  
  const createAppendPortalRoot = (wrapperID) => {
    const styles = className.split(' ');
    const element = document.createElement('div');
    element.setAttribute("id", wrapperID);
    element.classList.add(...styles);
    document.body.appendChild(element);
    return element;
  };

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperID);
    let isGenerated = false;

    if (!element) {
      isGenerated = true;
      element = createAppendPortalRoot(wrapperID);
    }

    setWrapEl(element);

    return () => { // Clean up generated wrap element
      if (isGenerated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperID]);
  
  if (wrapEl === null) return null;
  
  return createPortal(children, wrapEl);
}

export default ReactPortal;