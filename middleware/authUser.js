
const jwt = require("jsonwebtoken");
const { JWT_AUTH_KEY } = require("../config/keys");

// Middleware for authenticating and identifying the user who sent the request
// Stores the user's identity in (req.user)
const authUserJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, JWT_AUTH_KEY, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }
          next();
      });
  } else {
      res.sendStatus(401);
  }
};

exports.authUser = authUserJWT;