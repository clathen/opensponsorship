import React, { useState } from "react";

export default function NewProfileBasic({
  setProfileObject,
  profileObject,
  setSubPage,
}) {
  const toggleSport = (e) => {
    const sport = e.currentTarget.value;
    if (profileObject.sports.includes(sport)) {
      setProfileObject({
        ...profileObject,
        sports: [
          ...profileObject.sports.slice(0, profileObject.sports.indexOf(sport)),
          ...profileObject.sports.slice(
            profileObject.sports.indexOf(sport) + 1
          ),
        ],
      });
    } else {
      setProfileObject({
        ...profileObject,
        sports: [...profileObject.sports, sport],
      });
    }
  };
  return (
    <div>
      <div>
        <span>Name: </span>
        <input
          placeholder="Enter Name"
          onChange={(e) => {
            setProfileObject({ ...profileObject, name: e.currentTarget.value });
          }}
          value={profileObject.name}
        ></input>
      </div>
      <div>
        <span>Sport(s): </span>
        <div>
          <input
            type="checkbox"
            value="Baseball"
            id="Baseball"
            name="Baseball"
            checked={profileObject.sports.includes("Baseball")}
            onChange={toggleSport}
          />
          <label htmlFor="Baseball">Baseball</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Tennis"
            id="Tennis"
            name="Tennis"
            checked={profileObject.sports.includes("Tennis")}
            onChange={toggleSport}
          />
          <label htmlFor="Tennis">Tennis</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Soccer"
            id="Soccer"
            name="Soccer"
            checked={profileObject.sports.includes("Soccer")}
            onChange={toggleSport}
          />
          <label htmlFor="Soccer">Soccer</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Football"
            id="Football"
            name="Football"
            checked={profileObject.sports.includes("Football")}
            onChange={toggleSport}
          />
          <label htmlFor="Football">Football</label>
        </div>
      </div>
      <div>
        <span>Gender: </span>
        <input
          placeholder="Enter Gender"
          onChange={(e) => {
            setProfileObject({
              ...profileObject,
              gender: e.currentTarget.value,
            });
          }}
          value={profileObject.gender}
        ></input>
      </div>
      <div>
        <span>DOB: </span>
        <input
          placeholder="Enter DOB"
          onChange={(e) => {
            setProfileObject({ ...profileObject, dob: e.currentTarget.value });
          }}
          value={profileObject.dob}
        ></input>
      </div>
      <button type="button" onClick={() => setSubPage("newProfileAbout")}>
        Next
      </button>
    </div>
  );
}
