export const createCommentGQL = `
  mutation CreateComment(
    $message: String!
    $eventId: String!
    $userId: String!
  ) {
    createComment(createCommentFormInput: {
      message: $message
      eventId: $eventId
      userId: $userId
      }) {
        message
        event_id
        user_id
      }
    }
`;
