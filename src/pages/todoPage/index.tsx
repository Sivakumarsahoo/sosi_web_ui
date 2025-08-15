import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoCard from "../../component/TodoCard/index.tsx";

const CounterPage: React.FC = () => {
  const storedTodos = window.localStorage.getItem("todos");
  const [todos, setTodos] = useState<string[]>([]);
  const [isInitial, setIsInitial] = useState<boolean>(false);

  const handleEraseAll = () => {
    setTodos([]);
  };

  const handleSave = (message, index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index] = message;
      return updatedTodos;
    });
  };

  const handleCreate = () => {
    setTodos((prevTodos) => [...prevTodos, "Newly created todo"]);
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const handler = {
    apply(target, thisArg, arg) {
      if (arg.length === 0 || arg[0].includes("@") || arg[0].includes("#")) {
        console.warn(
          "Illegal argument provided to the function, please try again."
        );
        return;
      }
      return Reflect.apply(target, thisArg, arg);
    },
  };
  const proxyCheck = new Proxy(handleSave, handler);

  useEffect(() => {
    if (isInitial) {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isInitial]);

  useEffect(() => {
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
      setIsInitial(true);
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        py: 3,
        px: { xs: 2, md: 5 },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 800,
          width: "100%",
          height: "95vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* Header Section */}
        <Box sx={{ p: 3, borderBottom: "1px solid #ddd" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            Todo List
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4caf50", // medium green
                "&:hover": { backgroundColor: "#43a047" },
              }}
              onClick={handleCreate}
            >
              Create
            </Button>
            <Button variant="outlined" color="error" onClick={handleEraseAll}>
              Erase All
            </Button>
          </Box>
        </Box>

        {/* Scrollable Todo List */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 3,
          }}
        >
          {todos.length > 0 ? (
            <Grid container spacing={3}>
              {todos.map((todo, index) => (
                <TodoCard
                  key={index}
                  index={index}
                  content={todo}
                  saveTask={proxyCheck}
                  deleteTask={handleDelete}
                />
              ))}
            </Grid>
          ) : (
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{ mt: 5 }}
            >
              Let's start with your todo task
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default CounterPage;
