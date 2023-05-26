const getAllUser = async (req, res, next) => {
  try {
    res.send("estos son los usuarios");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUser,
};
