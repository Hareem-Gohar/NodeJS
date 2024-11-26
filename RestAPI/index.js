const express = require("express");
const app = express();
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const { error } = require("console");

app.use(express.urlencoded({ extended: false }));
//Routes
app.get("/users", (req, res) => {
  const name = req.query.name;
  if (name) {
    const username = users.find((username) => username.first_name === name);
    return res.json(username || { error: "User not found" });
  }
  return res.json(users);
});
//For HTML Rendering
app.get("/api/users", (req, res) => {
  const html = `<ul>${users
    .map((user) => `<li>${user.first_name}</li>`)
    .join("")}</ul>`;
  res.send(html);
});

app
  .route("/users/:id")
  .get((req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if(user){
        return res.json(user);
    }
    else{
        return res.status(404).json({error: "User not found"})
    }
  })
  .patch((req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user)=> user.id === id);
    if(!user){
        return res.status(404).json({ error: "User not found" });
    }
    const {first_name, last_name, email, gender, job_title} = req.body;
    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(gender) user.gender = gender;
    if(job_title) user.job_title = job_title;
    if(email) user.email = email;
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err)=>{
        if(err) return res.status(500).json({error: "Failed to update user"});
        res.json({ status: "User updated successfully.", user });
    })

  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((user)=> user.id === id);
    if(index !== -1){
        users.splice(index, 1);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err)=>{
            if(err) return res.status(500).json({error: "Failed to delete user."});
            return res.json({status: "User deleted successfully."});
        })
    }
    else{
        return res.status(400).json({error: "User not Fount"});
    }
});

app.post("/users", (req, res) => {
  // const {first_name, last_name, email} = req.body;
  const Body = req.body;
  users.push({
    id: users.length + 1,
    first_name: Body.first_name,
    last_name: Body.last_name,
    email: Body.email,
    gender: Body.gender,
    job_title: Body.job_title
  });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "SUCCESS, ", id: users.length });
  });
});

app.listen(8000, () => console.log("Server Started."));
