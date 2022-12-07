import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ProfileList from "./profilelist.jsx";
import NewProfile from "./newprofile.jsx";
import ShowProfile from "./showprofile.jsx";

function App() {
  const [page, setPage] = useState("ProfileList");
  const [profileId, setProfileId] = useState(null);
  const [shownProfile, setShownProfile] = useState(null);

  if (page === "ProfileList") {
    return (
      <ProfileList
        setPage={setPage}
        setProfileId={setProfileId}
        setShownProfile={setShownProfile}
      />
    );
  }
  console.log(page);
  if (page === "NewProfile") {
    return <NewProfile setPage={setPage}></NewProfile>;
  }
  if (page === "ShowProfile") {
    return (
      <ShowProfile setPage={setPage} shownProfile={shownProfile}></ShowProfile>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
