import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ICallBackType } from "shared/helpers/types";
import { deleteEventFx } from "store/events/effects";

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
  eventId?: string;
  userId: string;
}

const DeleteEvent = ({ callback, eventId, userId }: IProps) => {
  const handleDelete = () => {
    deleteEventFx({
      eventId,
      userId,
    });
    callback();
  };

  return (
    <Modal open onClose={callback}>
      <Box sx={style}>
        <Typography>Are you sure you want to delete this event?</Typography>
        <Button onClick={handleDelete} color="warning">
          Delete
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteEvent;
