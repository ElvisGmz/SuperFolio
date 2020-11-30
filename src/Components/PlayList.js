import React from "react";
import Iframe from "react-iframe";

export default function PlayList() {
  return (
    <>
      <h2>My ❤ PlayList</h2>
      <Iframe
        url="https://open.spotify.com/embed/playlist/37i9dQZF1E4mAtMnuGyaXu"
        height="550"
        width="100%"
        allow="encrypted-media"
        frameBorder="0"
      />
    </>
  );
}
