import Modal from "@mui/material/Modal";
import { ICallBackType } from "shared/helpers/types";
import { Box, Button, Typography } from "@mui/material";
import Comment from "./Comment";
import { CommentType } from "store/events/types";
import ClearIcon from "@mui/icons-material/Clear";
import NewComment from "./NewComment";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  position: "absolute" as "absolute",
  top: 0,
  right: 0,
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  height: "100%",
};

interface IProps {
  comments: CommentType[];
  callback: ICallBackType;
  userId?: string;
  eventId?: string;
}

const CommentsModal = ({ callback, comments, userId, eventId }: IProps) => {
  return (
    <Modal open onClose={callback}>
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Comments</Typography>

          <Button onClick={callback}>
            <ClearIcon />
          </Button>
        </Box>

        <Box
          sx={{ padding: "14px", overflowY: "auto", maxHeight: "70vh" }}
          className="App"
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {comments?.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </Box>
        </Box>
        <NewComment userId={userId} eventId={eventId} />
      </Box>
    </Modal>
  );
};

export default CommentsModal;
