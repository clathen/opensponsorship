const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/profiles");

const profileSchema = new mongoose.Schema({
  name: String,
  sports: [String],
  gender: String,
  dob: String,
  description: String,
  location: String,
  team: String,
  about: String,
  interests: String,
  profileUrl: String,
});

const Profile = mongoose.model("Profile", profileSchema);

async function create(profileObject) {
  const profile = new Profile(profileObject);
  await profile.save();
}

async function getProfiles() {
  return Profile.find({});
}

async function getProfile(profileId) {
  return Profile.findById(profileId);
}

module.exports = { create, getProfiles, getProfile };
