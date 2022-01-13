const { Promise } = require("mongoose");
const conn = require("./database");
const User = conn.models.User;
const Invite = conn.models.Invite;

// retruns a promise, with user data is resolves and error if rejects.
async function create_user(profile_id, username, profile_url) {
  let new_user = new User({
    profile_id: profile_id,
    username: username,
    profile_url: profile_url,
  });
  if (await get_user_profile_by_id(profile_id)) {
    throw new Error("User Already Exists");
  }
  return await new_user.save();
}

async function get_user_profile_by_id(profile_id) {
  try {
    let user = await User.findOne({ profile_id: profile_id });
    return user;
  } catch (error) {
    throw error;
  }
}

async function get_user_by_username(username) {
  try {
    let user = await User.findOne({ username: username });
    return user;
  } catch (error) {
    throw error;
  }
}

// Dindnt catch for duplicate insersions
async function notification_add_team_invite(invite_by, invite_to) {
  try {
    let user = await get_user_by_username(invite_to);
    if (user) {
      let notifications = user.notifications;
      notifications.team_invite.push(invite_by);

      // Add only if user exists
      if (
        await User.findOneAndUpdate(
          { username: invite_to },
          { notifications: JSON.stringify(notifications) }
        )
      ) {
        await db_add_invite(invite_by, invite_to, "Team", "Pending");
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    //console.error(error);
    throw new Error("Failed to add Invite");
  }
}

async function db_add_invite(invite_by, invite_to, invite_for, status) {
  let invite = new Invite({
    invite_by,
    invite_to,
    invite: {
      _for: invite_for,
      name: invite_by,
    },
    invite_status: status,
  });
  return await invite.save();
}

async function accept_team_invite(invite_by, invite_to) {
  try {
    let user = await get_user_by_username(invite_to);
    let notifications = JSON.parse(user.notifications);
    if (notifications.team_invite.includes(invite_by)) {
      for (var i = 0; i < notifications.team_invite.length; i++) {
        if (arr[i].equals(invite_by)) {
          arr.splice(i, 1);
          break;
        }
      }
      // add to team
    }
  } catch (error) {
    //console.error(error);
    throw error;
  }
}

module.exports.create_user = create_user;
module.exports.get_user_profile_by_id = get_user_profile_by_id;
module.exports.get_user_by_username = get_user_by_username;
module.exports.notification_add_team_invite = notification_add_team_invite;
