import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ICallBackType } from "shared/helpers/types";
import { EventType } from "store/events/types";
import { Grid, TextField } from "@mui/material";
import { updateEventFx } from "store/events/effects";

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
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

interface IProps {
  callback: ICallBackType;
  event: EventType;
}

const EditEvent = ({ callback, event }: IProps) => {
  const [eventData, setEventData] = useState<EventType>(event);

  const hendelChange = (e: any) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    updateEventFx({
      name: eventData.name,
      description: eventData.description,
      id: eventData._id,
    });
    callback();
  };

  return (
    <Modal open onClose={callback}>
      <Box sx={style}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Event Name"
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
            multiline
            rows={4}
            maxRows={Infinity}
          />
        </Grid>
        <Button onClick={handleUpdate}>Update</Button>
      </Box>
    </Modal>
  );
};

export default EditEvent;
