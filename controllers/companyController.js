const Company = require("../models/company");

exports.index = async (req, res, next) => {
  const company = await Company.find();
  res.status(200).json({
    data: company,
  });
};

exports.insert = async (req, res, next) => {
  const {
    name,
    address: { province },
  } = req.body;

  let company = new Company({
    name: name,
    address: {
      province: province,
    },
  });
  await company.save();

  res.status(200).json({
    message: "เพิ่มข้อมูลเรียบร้อย",
  });
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await Company.findOne({
      _id: id,
    });
    if (!company) {
      const error= new Error("ไม่พบข้อมูล")
      error.statusCode = 400
      throw error;
      //throw new Error("ไม่พบบริษัท");
    } else {
      res.status(200).json({
        data: company,
      });
    }
  } catch (error) {
    next(error)
    /*res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด" + error.message,
      },
    });*/
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const company = await Company.deleteOne({
      _id: id,
    });

    if (company.deletedCount === 0) {
      const error= new Error("ไม่สามารถลบข้อมูลได้ / ไม่พบบริษัท")
      error.statusCode = 401
      throw error;
      //throw new Error("ไม่สามารถลบข้อมูลได้ / ไม่พบบริษัท");
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อย",
      });
    }
  } catch (error) {
    next(error)
    /*res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด" + error.message,
      },
    });*/
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      address: { province },
    } = req.body;

    const company = await Company.findByIdAndUpdate(id, {
      name: name,
      address: {
        province: province,
      },
    });
    res.status(200).json({
      message: "เพิ่มข้อมูลเรียบร้อย",
    });
  } catch (error) {
    error = new Error("เกิดข้อผิดพลาด: " + error.message)
    error.statusCode = 402
    next(error)
    /*res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด" + error.message,
      },
    });*/
  }
};


