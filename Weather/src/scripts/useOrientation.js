import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export function useOrientation() {
  const [orientation, setOrientation] = useState(Dimensions.get("screen"));

  useEffect(() => {
    const onChange = (result) => {
      setOrientation(result.screen);
    };

    Dimensions.addEventListener("change", onChange);

    return;
  }, []);

  return {
    ...orientation,
    Portait: orientation.height > orientation.width,
  };
}
