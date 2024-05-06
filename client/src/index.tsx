import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Suspense } from "react";

const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_API_URL,
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <ApolloProvider client={client}>
  <Suspense fallback={true}>
    <App />
  </Suspense>
  // </ApolloProvider>
);
