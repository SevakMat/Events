import { useState } from "react";
import { Box, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";
import EditEvent from "../edit/EditEvent";
import DeleteEvent from "../delete/DeleteEvent";
import CommentsModal from "components/comments/CommentsModal";
import { EventType } from "store/events/types";
import { Comment } from "@mui/icons-material";

interface IProps {
  event: EventType;
  userId?: string;
}

const Actions = ({ event, userId }: IProps) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const openEditModalHandler = () => setOpenModal("edit");
  const openDeleteModalHandler = () => setOpenModal("delete");
  const openCommentsModalHandler = () => setOpenModal("comments");
  const closeModalHandler = () => setOpenModal(null);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Button onClick={openCommentsModalHandler}>
          <Comment />
        </Button>
        {userId === event.user_id && (
          <Box sx={{ display: "flex" }}>
            <Button onClick={openEditModalHandler}>
              <CreateIcon />
            </Button>
            <Button onClick={openDeleteModalHandler}>
              <ClearIcon />
            </Button>
          </Box>
        )}
      </Box>

      {openModal === "edit" && (
        <EditEvent callback={closeModalHandler} event={event} />
      )}
      {openModal === "delete" && (
        <DeleteEvent
          callback={closeModalHandler}
          eventId={event._id}
          userId={userId as string}
        />
      )}
      {openModal === "comments" && (
        <CommentsModal
          callback={closeModalHandler}
          comments={event.comments}
          userId={userId}
          eventId={event._id}
        />
      )}
    </>
  );
};

export default Actions;
