import React, { HTMLAttributes, memo } from "react";
import { CustomButton } from "./index.styles.tsx";
// with use callback  and memo we can avoid unncessary re-renders of the component
// it will be overkill for small components but it is a good practice to use it for larger components
const CounterButton: React.FC<Props> = memo(
  ({ buttonHeading, onButtonClick }) => {
    console.log("rerendring CounterButton with heading:", buttonHeading);
    return <CustomButton onClick={onButtonClick}>{buttonHeading}</CustomButton>;
  }
);

interface Props extends HTMLAttributes<any> {
  buttonHeading: string;
  onButtonClick: () => void;
}
export default CounterButton;
