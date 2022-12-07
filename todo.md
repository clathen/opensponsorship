- app.jsx
  - Usestate to manage
    - Page
    - Profile id
  - profilelist.jsx (setPage, setProfileID)
    - Usestate to manage
      - Profile list
    - On load
      - Get full profile list from DB
      - Set state to profile list
    - Render
      - All profiles in list
    - profilelistitem.jsx (profileitemobject, setPage, setProfileID)
  - newprofile.jsx (setPage)
    - Usestate to manage
      - subpage (basic is default)
      - profileobject
        - Name
        - Sport
        - Gender
        - DOB
        - Description
        - Location
        - Team
        - About
        - Interests
        - Profile image url
    - Render
      - newprofile subpage
    - newprofilebasic.jsx (profileObject, setProfile, setSubpage)
      - Input boxes
        - On change handler that calls setProfile
      - Next button
    - newprofileabout.jsx (profileObject, setProfile, setSubpage)
      - Input boxes
        - On change handler that calls setProfile
      - Photo upload functionality
      - Next and previous buttons
    - newprofilesummary.jsx (profileObject, setPage, setSubpage)
      - Previous buttons
      - Submit button
        - On click
          - Axios post request with profileObject
          - setPage to profilelist
  - showprofile.jsx (profile ID, setPage)