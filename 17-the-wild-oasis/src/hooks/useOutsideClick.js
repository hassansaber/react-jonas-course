import { useEffect, useRef } from "react";

export function useOutsideClick(handler, isCapturing = true) {

  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        console.log(ref.current);
        console.log(e.target);
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      //true: listen for event on capturing phase , not bubbling phase
      document.addEventListener("click", handleClick, isCapturing);

      return () =>
        document.removeEventListener("click", handleClick, isCapturing);
    },
    [handler, isCapturing]
  );


  return ref
}