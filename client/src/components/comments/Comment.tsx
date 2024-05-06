import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { CommentType } from "store/events/types";

interface IProps {
  comment: CommentType;
}

const Comment = ({ comment }: IProps) => {
  const imgLink =
    "https://t4.ftcdn.net/jpg/00/97/00/09/240_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg";

  return (
    <Paper style={{ padding: "10px 10px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography
            style={{
              margin: 0,
              textAlign: "left",
              width: "50%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {comment.user_id}
          </Typography>
          <Typography sx={{ textAlign: "left", color: "gray" }}>
            {comment.message}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Comment;
