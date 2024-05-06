import Modal from "@mui/material/Modal";
import { ICallBackType, ObjectType } from "shared/helpers/types";
import { Box, Button, TextField, Typography } from "@mui/material";
import Comment from "./Comment";
import { CommentType } from "store/events/types";
import { useState } from "react";
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
  height: "100vw",
};

interface IProps {
  comments: CommentType[];
  callback: ICallBackType;
  userId?: string;
  eventId?: string;
}

const CommentsModal = ({ callback, comments, userId, eventId }: IProps) => {
  return (
    <Modal
      open
      onClose={callback}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{ padding: "14px", overflowY: "auto", maxHeight: "30vw" }}
          className="App"
        >
          <Typography>Comments</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {comments?.map((comment) => (
              <Comment comment={comment} />
            ))}
          </Box>
        </Box>
        <NewComment userId={userId} eventId={eventId} />
      </Box>
    </Modal>
  );
};

export default CommentsModal;
