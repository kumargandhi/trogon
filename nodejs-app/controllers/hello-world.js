exports.handShake = (req, res, next) => {
  res.status(200).json({
    message: "hand shake successful!"
  });
};
