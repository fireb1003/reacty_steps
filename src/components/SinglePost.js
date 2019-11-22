import React from "react";
import { AppCtxt } from "../Context";

export default function SinglePost() {
  const { show_archived } = React.useContext(AppCtxt);
  return <>{show_archived && <span>show_archived true</span>}</>;
}
