const router = require("express").Router();
const isAuth = require("../auth/verifyAuth").isAuth;
const { notification_add_team_invite } = require("../db/db_utils");

// sending invite to target user - by adding to db
router.get("/api/inivite/team/add_invite", isAuth, (req, res) => {
  let owner = req.user.username;
  let invite_to = req.query.username;
  notification_add_team_invite(owner, invite_to)
    .then(
      res.json({
        status: "success",
        message: "Invited User",
      })
    )
    .catch((err) => {
      res.json({
        status: "failure",
        message: err.message,
      });
    });
});

// accpet or reject invite
router.post("/api/inivite/team", isAuth, (req, res) => {
  let username = req.user.username;
  let invite_by = req.body.invite_by;
  let invitation_state = req.body.invitation_state; // accept or reject
});

module.exports = router;
