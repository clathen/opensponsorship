import React, { useState, useEffect } from "react";
import ProfileListItem from "./profilelistitem.jsx";

export default function ProfileList({ setPage, setShownProfile }) {
  const [profileList, setProfileList] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/listprofiles");
      const body = await result.json();
      setProfileList(body);
    }
    fetchData();
  }, []);
  if (!profileList) {
    return "Loading";
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setPage("NewProfile");
        }}
      >
        Create New Profile
      </button>
      {profileList.map((profileItem, index) => {
        return (
          <ProfileListItem
            setShownProfile={setShownProfile}
            setPage={setPage}
            key={index}
            profileItem={profileItem}
          />
        );
      })}
    </div>
  );
}
