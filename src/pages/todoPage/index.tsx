import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoCard from "../../component/TodoCard/index.tsx";

const CounterPage: React.FC = () => {
  // In this section I'm mostly focused on local storage, basic proxy reflect and debouncing functionality.
  const [todos, setTodos] = useState<string[]>([]);
  const [isInitial, setIsInitial] = useState<boolean>(false);

  const handleEraseAll = () => {
    setTodos([]);
  };

  const handleSave = (message, index, oldMessage) => {
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
        console.warn("Arguments received:", arg);
        const args = [arg[2], arg[1], arg[0]];
        console.warn("Arguments reordered to:", args);
        return Reflect.apply(target, thisArg, args);
      }
      return Reflect.apply(target, thisArg, arg);
    },
  };
  const proxyCheck = new Proxy(handleSave, handler);

  useEffect(() => {
    if (isInitial) {
      try {
        window.localStorage.setItem("todos", JSON.stringify(todos));
        console.log("Done");
      } catch (error) {
        console.error("Error saving todos to localStorage:", error);
        console.error("Please check your browser settings or try again later.");
      }
    }
  }, [todos, isInitial]);

  useEffect(() => {
    try {
      const storedTodos = window.localStorage.getItem("todos") || "[]";
      setTodos(JSON.parse(storedTodos));
      setIsInitial(true);
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
      console.error("Please check your browser settings or try again later.");
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
                  todos={todos}
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
