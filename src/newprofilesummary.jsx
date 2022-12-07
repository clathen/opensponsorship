import React, { useState } from "react";
import ProfileCard from "./profilecard.jsx";

export default function NewProfileSummary({
  profileObject,
  setPage,
  setSubPage,
}) {
  return (
    <div>
      <ProfileCard profileItem={profileObject} />
      <div>
        <button
          type="button"
          onClick={() => {
            setSubPage("newProfileAbout");
          }}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={async () => {
            await fetch("/profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(profileObject),
            });
            setPage("ProfileList");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
