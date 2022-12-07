import React, { useState, useEffect } from "react";

export default function ProfileCard({ profileItem }) {
  return (
    <div className="profileListItem-container">
      <div className="profileListItem-header">
        <img width="100" height="100" src={profileItem.profileUrl}></img>
      </div>
      <div className="profileListItem-body">
        <div className="profileListItem-column">
          <div>Name: {profileItem.name}</div>
          <div>
            Sports: {profileItem.sports ? profileItem.sports.join(", ") : ""}
          </div>
          <div>Gender: {profileItem.gender}</div>
          <div>DOB: {profileItem.dob}</div>
        </div>
        <div className="profileListItem-column">
          <div>Description: {profileItem.description}</div>
          <div>Location: {profileItem.location}</div>
          <div>Team: {profileItem.team}</div>
          <div>About: {profileItem.about}</div>
          <div>Interests: {profileItem.interests}</div>
        </div>
      </div>
    </div>
  );
}
