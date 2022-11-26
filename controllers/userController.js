exports.index =  (req, res, next) => {
  res.status(200).json({
    fullname: "Kritsakorn Dechalert",
  });
};

exports.bio =  (req, res, next) => {
  res.status(200).json({
    fullname: "Kritsakorn Dechalert",
    nickname: "Kong",
    hobby: "Travel",
    gitusername: "KeroPunch",
  });
};
