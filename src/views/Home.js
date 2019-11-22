import React from "react";
import { callClient } from "../MyApolloProvider";
import gql from "graphql-tag";
import SinglePost from "../components/SinglePost";
import { AppCtxt } from "../Context";

export default function Home() {
  const GET_POSTS = gql`
    {
      posts {
        title
      }
    }
  `;
  const { show_archived, toggleShowState } = React.useContext(AppCtxt);
  const [showArchived, setShowArchived] = React.useState(false);

  React.useEffect(() => {
    setShowArchived(show_archived);
  }, [show_archived]);
  return (
    <>
      <input
        type="checkbox"
        name="vehicle1"
        checked={showArchived}
        onChange={e => {
          setShowArchived(e.target.checked);
          toggleShowState(e.target.checked);
        }}
      />
      Switcho
      <br />
      <h1
        className="App text-center"
        style={{ backgroundColor: "gray" }}
        onClick={async _ => {
          let { posts } = await callClient(GET_POSTS);
          console.log(posts);
        }}
      >
        OK {JSON.stringify(show_archived)}
      </h1>
      <SinglePost />
    </>
  );
}
