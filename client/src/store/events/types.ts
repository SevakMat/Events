export interface CommentType {
  _id: string;
  message: string;
  user_id: string;
  createdAt: string;
}

export type EventType = {
  _id?: string;
  name: string;
  description: string;
  user_id?: string;
  comments: CommentType[];
};

export interface EventState {
  events: EventType[];
}
