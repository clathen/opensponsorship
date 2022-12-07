import React, { useState } from "react";

export default function NewProfileAbout({
  profileObject,
  setProfileObject,
  setSubPage,
}) {
  return (
    <div>
      <div>
        <span>Description: </span>
        <input
          placeholder="Enter Description"
          onChange={(e) => {
            setProfileObject({
              ...profileObject,
              description: e.currentTarget.value,
            });
          }}
          value={profileObject.description}
        ></input>
      </div>
      <div>
        <span>Location: </span>
        <input
          placeholder="Enter Location"
          onChange={(e) => {
            setProfileObject({
              ...profileObject,
              location: e.currentTarget.value,
            });
          }}
          value={profileObject.location}
        ></input>
      </div>
      <div>
        <span>Team: </span>
        <input
          placeholder="Enter Team"
          onChange={(e) => {
            setProfileObject({
              ...profileObject,
              team: e.currentTarget.value,
            });
          }}
          value={profileObject.team}
        ></input>
      </div>
      <div>
        <span>About: </span>
        <input
          placeholder="Enter About Info"
          onChange={(e) => {
            setProfileObject({
              ...profileObject,
              about: e.currentTarget.value,
            });
          }}
          value={profileObject.about}
        ></input>
      </div>
      <div>
        <span>Interests: </span>
        <input
          placeholder="Interests"
          onChange={(e) => {
            setProfileObject({
              ...profileObject,
              interests: e.currentTarget.value,
            });
          }}
          value={profileObject.interests}
        ></input>
      </div>
      <button
        type="button"
        onClick={() => {
          setSubPage("newProfileBasic");
        }}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => {
          setSubPage("newProfileSummary");
        }}
      >
        Next
      </button>
    </div>
  );
}
