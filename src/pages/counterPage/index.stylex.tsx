import { Box, Paper, styled, Typography } from "@mui/material";

export const CounterContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
});

export const CounterCard = styled(Paper)({
  padding: 6,
  borderRadius: 3,
  textAlign: "center",
  minWidth: 300,
  backgroundColor: "#fff",
});
export const ButtonContainer = styled(Box)({
  display: "flex",
  gap: 2,
  justifyContent: "center",
});

export const ValueTypo = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 3,
  color: "#1976d2",
});
