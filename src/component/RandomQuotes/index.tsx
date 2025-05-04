import { Box } from "@mui/material";
import React, { HTMLAttributes, useEffect, useState } from "react";

const RandomQuotes: React.FC<Props> = ({ click, value }) => {
  const [quote, setQuote] = useState<string>("Random");
  const [quote2, setQuote2] = useState<string>("Random");
  const [quote3, setQuote3] = useState<string>("Random");
  const [color1, setColor] = useState<string>(" #00ff01");
  const [color2, setColor2] = useState<string>(" #00ff01");
  const [color3, setColor3] = useState<string>(" #00ff01");

  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  ];
  const color = [" #00fff4", " #9600ff", " #00ff01"];
  console.log("rerender outside useeffect");

  const getRandomQuote = () => {
    let index = Math.floor(Math.random() * 3);
    return index;
  };

  useEffect(() => {
    const index = getRandomQuote();
    setQuote(quotes[index]);
    setColor(color[index]);
  });
  useEffect(() => {
    const index = getRandomQuote();
    setQuote2(quotes[index]);
    setColor2(color[index]);
  }, []);
  useEffect(() => {
    const index = getRandomQuote();
    setQuote3(quotes[index]);
    setColor3(color[index]);
  }, [value]);

  return (
    <>
      <Box
        sx={{ display: "flex", gap: "1rem", width: "100%", padding: "2rem" }}
      >
        <Box sx={{ padding: "1rem", backgroundColor: color1 }}>
          <Box sx={{ fontWeight: 900 }}>
            {"Without dependency array=> always run"}
          </Box>
          {quote}
        </Box>
        <Box sx={{ padding: "1rem", backgroundColor: color2 }}>
          <Box sx={{ fontWeight: 900 }}>
            {"With empty dependency array=> run only on initial render"}
          </Box>
          {quote2}
        </Box>
        <Box sx={{ padding: "1rem", backgroundColor: color3 }}>
          <Box sx={{ fontWeight: 900 }}>
            {
              "With filled dependency array=> run when there is a value change in dependent fields"
            }
          </Box>
          {quote3}
        </Box>
      </Box>
    </>
  );
};
interface Props extends HTMLAttributes<any> {
  click: number;
  value?: number;
}
export default RandomQuotes;
