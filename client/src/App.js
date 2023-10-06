import Navbar from "./components/navbar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";


import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        // projects: {
        //   merge(existing, incoming) {
        //     return incoming;
        //   },
        // },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://127.0.0.1:5000/graphql",
  cache,
});

function App() {
  if (false) {  // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />

        <BrowserRouter basename="/">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/project/:id"} element={<Project />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
