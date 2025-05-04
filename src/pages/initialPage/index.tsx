import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { NavContainer } from "../../componentStyles/containers.ts";
import generic from "../../constant/generic.ts";

const InitialPage: React.FC = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8082/hello")
  //     .then((response) => response.text())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  //   console.log(data);
  // }, []);
  const handleClick = () => {
    navigate(generic.url.rerender);
  };

  return (
    <NavContainer>
      <Button variant="contained" onClick={handleClick}>
        Rendering Child Demo
      </Button>
    </NavContainer>
  );
};

export default InitialPage;
