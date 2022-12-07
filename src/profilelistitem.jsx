import React, { useState, useEffect } from "react";

export default function ProfileListItem({
  profileItem,
  setPage,
  setShownProfile,
}) {
  return (
    <div
      onClick={() => {
        setShownProfile(profileItem);
        setPage("ShowProfile");
      }}
      className="profileListItem-container"
    >
      <div className="profileListItem-header">
        <img width="100" height="100" src={profileItem.profileUrl}></img>
      </div>
      <div className="profileListItem-body">
        <div className="profileListItem-column">
          <div>Name: {profileItem.name}</div>
        </div>
        <div className="profileListItem-column">
          <div>Sports: {profileItem.sports.join(", ")}</div>
        </div>
      </div>
    </div>
  );
}
