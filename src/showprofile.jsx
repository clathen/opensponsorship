import React, { useState, useEffect } from "react";
import ProfileCard from "./profilecard.jsx";

export default function ShowProfile({ profileId, setPage, shownProfile }) {
  return (
    <div>
      <div>
        <ProfileCard profileItem={shownProfile} />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setPage("ProfileList");
          }}
        >
          Return to Profile List
        </button>
      </div>
    </div>
  );
}
