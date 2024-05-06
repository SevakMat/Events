import eventResolver from "./resolvers/eventResolver";
import authResolver from "./resolvers/authResolver";
import commentResolver from "./resolvers/commentResolver";

export const RootResolver = [authResolver, eventResolver, commentResolver];
