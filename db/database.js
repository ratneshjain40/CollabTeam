const mongoose = require("mongoose");

require("dotenv").config();

const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
  dbName: process.env.COSMOSDB_DBNAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  profile_id: String,
  username: String,
  profile_url: String,
  notifications: {
    team_invite: [String],
  },
});

const InviteSchema = new mongoose.Schema({
  invite_by: String,
  invite_to: String,
  invite: {
    name: String,
    _for: String,
  },
  invite_staus: String,
  date: { type: Date, default: Date.now },
});

const TeamSchema = new mongoose.Schema({
  profile_id: String,
  team_owner: String,
  team_members: [String],
});

const User = connection.model("User", UserSchema);
const Invite = connection.model("Invite", InviteSchema);
const Team = connection.model("Team", TeamSchema);

module.exports = connection;
