exports.index = (req, res, next) => {
  res.status(200).json({
    data: [
      {
        id: "1",
        name: "CDG Group",
        address: {
          province: "Bangkok",
          postcode: 10120,
        },
      },
      {
        id: "2",
        name: "MFEC",
        address: {
          province: "Bangkok",
          postcode: 10900,
        },
      },
      {
        id: "3",
        name: "IT One",
        address: {
          province: "Bangkok",
          postcode: 10400,
        },
      },
    ],
  });
};
