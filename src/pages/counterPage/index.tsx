import { Typography } from "@mui/material";
import React, { useCallback } from "react";
import CounterButton from "../../component/CounterButton/index.tsx";
import counter from "../../constant/counter.ts";
import {
  ButtonContainer,
  CounterCard,
  CounterContainer,
  ValueTypo,
} from "./index.stylex.tsx";

const CounterPage: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);
  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <CounterContainer>
      <CounterCard elevation={4}>
        <Typography variant="h5" gutterBottom>
          {counter.title}
        </Typography>

        <ValueTypo variant="h3">{count}</ValueTypo>

        <ButtonContainer>
          <CounterButton
            buttonHeading={counter.increment}
            onButtonClick={handleIncrement}
          />
          <CounterButton
            buttonHeading={counter.reset}
            onButtonClick={handleReset}
          />
          <CounterButton
            buttonHeading={counter.decrement}
            onButtonClick={handleDecrement}
          />
        </ButtonContainer>
      </CounterCard>
    </CounterContainer>
  );
};

export default CounterPage;
