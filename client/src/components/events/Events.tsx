import { Box, Button, Card, TextField } from "@mui/material";
import { useUnit } from "effector-react";
import { $eventsState } from "store/events";
import { $userState } from "store/auth";

import Event from "./event/Event";
import CreateIcon from "@mui/icons-material/Create";
import CreateEvent from "./event/create/CreateEvent";
import { useState } from "react";
import SearchEvent from "./event/search/Search";

const Events = () => {
  const { events } = useUnit($eventsState);
  const { user } = useUnit($userState);
  const [open, setOpen] = useState(false);

  const cancelCreate = () => {
    setOpen(false);
  };
  const openCreate = () => {
    setOpen(true);
  };

  return (
    <Card
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        minHeight: "50vw",
      }}
    >
      <Card
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SearchEvent />
        <Button onClick={openCreate}>Create Event</Button>
      </Card>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {events?.map((event, idx) => (
          <Event event={event} key={idx} userId={user?.id} />
        ))}
      </Box>

      {open && <CreateEvent callback={cancelCreate} userId={user?.id} />}
    </Card>
  );
};

export default Events;
