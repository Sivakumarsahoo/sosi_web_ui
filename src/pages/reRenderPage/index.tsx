import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import RandomQuotes from "../../component/RandomQuotes/index.tsx";

const ReRenderPage = () => {
  const [click, setClick] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  return (
    <>
      <Box>
        <Typography
          sx={{ fontWeight: 700, textAlign: "center", fontSize: "2rem" }}
        >
          Re-renderPage
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "1rem" }}>
          Rendering concept
        </Typography>
        <RandomQuotes click={click} value={value} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button
            variant="contained"
            onClick={() => {
              setClick((prev) => (prev += 1));
            }}
          >
            {
              "Click me to rerender and see the effect of useEffect on child component"
            }
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setValue((prev) => (prev += 1));
            }}
          >
            {"Click me to value change of a state"}
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default ReRenderPage;
