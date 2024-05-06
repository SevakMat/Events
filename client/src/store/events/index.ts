import { createStore } from "effector";
import {
  createEventFx,
  deleteEventFx,
  getEventsFx,
  updateEventFx,
} from "./effects";
import { EventState } from "./types";
import { createCommentFx } from "store/comment/effect";

export const $eventsState = createStore<EventState>({
  events: [],
});

$eventsState
  .on(getEventsFx.doneData, (state, result) => ({
    ...state,
    events: result,
  }))
  .on(getEventsFx.fail, (state) => ({
    ...state,
    events: [],
  }))

  .on(createEventFx.doneData, (state, result) => ({
    ...state,
    events: [...state.events, result],
  }))
  .on(createEventFx.fail, (state) => ({
    ...state,
  }))

  .on(updateEventFx.doneData, (state, result) => ({
    ...state,
    events: state.events.map((event) =>
      event._id === result._id ? result : event
    ),
  }))
  .on(updateEventFx.fail, (state) => ({
    ...state,
  }))

  .on(deleteEventFx.doneData, (state, result) => {
    return {
      ...state,
      events: state.events.filter((event) => event._id !== result),
    };
  })
  .on(deleteEventFx.fail, (state) => ({
    ...state,
  }))

  /////

  .on(createCommentFx.doneData, (state, result) => {
    return {
      ...state,
      events: state.events.map((event) => {
        if (event._id === result.event_id) {
          event.comments.push(result);
        }
        return event;
      }),
    };
  })
  .on(deleteEventFx.fail, (state) => ({
    ...state,
  }));
