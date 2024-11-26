const express = require("express");
const router = express.Router();
const {handleGetAllUsers, handleGetUserByID, handleUpdateUserById,handleDeltUserById, handleCreateNewUser} = require("../Controllers/user");

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserByID)
  .patch(handleUpdateUserById)
  .delete(handleDeltUserById);

router.post("/", handleCreateNewUser);


module.exports = router;