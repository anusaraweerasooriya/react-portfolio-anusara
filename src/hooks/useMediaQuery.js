import { useState, useEffect } from "react";

import React from "react";

const useMediaQuery = (query) => {
  const [matchers, setMatchers] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matchers) {
      setMatchers(media.matches);
    }

    const listener = () => setMatchers(media.matchers);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matchers, query]);

  return matchers;
};

export default useMediaQuery;
