const User = require("../Models/user");

const handleGetAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    const name = await req.query.name;
    if (name) {
      const username = allUsers.find(
        (username) => username.first_name === name
      );
      return res.json(username || { error: "User not found" });
    }
    return res.json(allUsers);
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ message: "Error fetching users" });
  }
};
const handleGetUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
const handleUpdateUserById = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" });
    if (!User) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ status: "User updated successfully.", User });
  } 
  catch (err) {
    console.error("Error fetching user:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const handleDeltUserById = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        if (!User) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json({ status: "User updated successfully.", User });
      } 
      catch (err) {
        console.error("Error fetching user:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
};

const handleCreateNewUser = async (req, res) => {
  const Body = req.body;
  if(
    !Body ||
    !Body.first_name || 
    !Body.last_name ||
    !Body.email ||
    !Body.gender ||
    !Body.job_title 
  ){
    return res.status(400).json({ error: "Please fill in all fields" });
  }
  const result = await User.create({
    first_name: Body.first_name,
    last_name: Body.last_name,
    email: Body.email,
    gender: Body.gender,
    job_tilte: Body.job_tilte,
  })
  res.json({ status: "User created successfully.", result });
};

module.exports = {
  handleGetAllUsers,
  handleGetUserByID,
  handleUpdateUserById,
  handleDeltUserById,
  handleCreateNewUser,
};
