import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { HTMLAttributes, useState } from "react";
import cancelIcon from "../../assets/cancelIcon.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import editIcon from "../../assets/editIcon.svg";
import saveIcon from "../../assets/saveIcon.svg";
const TodoCard: React.FC<Props> = ({
  index,
  content,
  saveTask,
  deleteTask,
}) => {
  const [data, setData] = useState<String>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    saveTask(data, index);
    setIsEdit(false);
  };
  const handleCancel = () => {
    setIsEdit(false);
    setData("");
  };
  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "100%",
          bgcolor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight="bold">{`Task ${index + 1}`}</Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {!isEdit && (
              <>
                <Box
                  component="span"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { opacity: 0.7 },
                  }}
                  onClick={handleEdit}
                >
                  <img src={editIcon} alt="edit" style={{ height: "1.8rem" }} />
                </Box>
                <Box
                  component="span"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { opacity: 0.7 },
                  }}
                  onClick={() => deleteTask(index)}
                >
                  <img
                    src={deleteIcon}
                    alt="delete"
                    style={{ height: "1.8rem" }}
                  />
                </Box>
              </>
            )}
            {isEdit && (
              <>
                <Box
                  component="span"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { opacity: 0.7 },
                  }}
                  onClick={handleSave}
                >
                  <img src={saveIcon} alt="save" style={{ height: "1.8rem" }} />
                </Box>
                <Box
                  component="span"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { opacity: 0.7 },
                  }}
                  onClick={handleCancel}
                >
                  <img
                    src={cancelIcon}
                    alt="cancel"
                    style={{ height: "1.8rem" }}
                  />
                </Box>
              </>
            )}
          </Box>
        </Box>
        {!isEdit ? (
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        ) : (
          <TextField value={data} onChange={handleChange} />
        )}
      </Paper>
    </Grid>
  );
};

interface Props extends HTMLAttributes<any> {
  index: number;
  content: string;
  saveTask: any;
  deleteTask: any;
}

export default TodoCard;
