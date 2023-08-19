const authorizePermissions = (roles) => {
    return (req, res, next) => {
      if (req.user.role !== "admin") {
        res.status(401).json({ message: "Unauthorized access to this route" });
      }
      next();
    };
  };
  module.exports = authorizePermissions;