import { useEffect, useState } from "react";

const useTextLengthPixel = (text: string) => {
  const ruler = document.createElement("span");
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    ruler.setAttribute(
      "style",
      "visibility:hidden; white-space:nowrap; position:absolute; left:-9999px; top: -9999px;"
    );
    document.body.appendChild(ruler);

    ruler.style.font = document.body.style.font;
    ruler.innerText = text;
    setWidth(ruler.offsetWidth);
    return () => {
      document.body.removeChild(ruler);
    };
  }, [ruler, text]);
  return width;
};

export default useTextLengthPixel;
