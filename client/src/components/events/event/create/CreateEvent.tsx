import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ICallBackType, ObjectType } from "shared/helpers/types";
import { Grid, TextField } from "@mui/material";
import { createEventFx } from "store/events/effects";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  callback: ICallBackType;
  userId?: string;
}

const CreateEvent = ({ callback, userId }: IProps) => {
  const [eventData, setEventData] = useState<ObjectType>({});

  const hendelChange = (e: any) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    createEventFx({
      name: eventData.name,
      description: eventData.description,
      userId,
    });
    callback();
  };

  return (
    <Modal
      open
      onClose={callback}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={eventData.name}
            onChange={hendelChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="description"
            label="Description"
            value={eventData.description}
            onChange={hendelChange}
          />
        </Grid>
        <Button onClick={handleCreate}>Create</Button>
      </Box>
    </Modal>
  );
};

export default CreateEvent;
