import React, { useState, useEffect } from "react";
import NewProfileBasic from "./newprofilebasic.jsx";
import NewProfileAbout from "./newprofileabout.jsx";
import NewProfileSummary from "./newprofilesummary.jsx";

export default function NewProfile({ setPage }) {
  const [profileObject, setProfileObject] = useState({ sports: [] });
  const [subPage, setSubPage] = useState("newProfileBasic");
  console.log(subPage);
  if (subPage === "newProfileBasic") {
    return (
      <NewProfileBasic
        setProfileObject={setProfileObject}
        profileObject={profileObject}
        setSubPage={setSubPage}
      ></NewProfileBasic>
    );
  }
  if (subPage === "newProfileAbout") {
    return (
      <NewProfileAbout
        setProfileObject={setProfileObject}
        profileObject={profileObject}
        setSubPage={setSubPage}
      ></NewProfileAbout>
    );
  }
  if (subPage === "newProfileSummary") {
    return (
      <NewProfileSummary
        profileObject={profileObject}
        setPage={setPage}
        setSubPage={setSubPage}
      ></NewProfileSummary>
    );
  }
}
