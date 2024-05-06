import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { ICallBackType } from "shared/helpers/types";
import { createCommentFx } from "store/comment/effect";

interface IProps {
  userId?: string;
  eventId?: string;
}

const NewComment = ({ userId, eventId }: IProps) => {
  const [newComment, setNewComment] = useState("");

  const handleChange = (e: any) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const handleCreateNewCommnet = () => {
    createCommentFx({
      message: newComment,
      eventId,
      userId,
    });
    setNewComment("");
  };

  return (
    <>
      <TextField
        id="outlined-textarea"
        label="Add your comment "
        placeholder="Placeholder"
        multiline
        value={newComment}
        onChange={handleChange}
      />
      <Button disabled={!newComment.length} onClick={handleCreateNewCommnet}>
        Add comment
      </Button>
    </>
  );
};
export default NewComment;
