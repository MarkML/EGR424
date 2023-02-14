const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());

const newAcctSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(20).required(),
  mobile: Joi.number().optional()
});

app.post("/newaccount", (req, res) => {
  var data = req.body;
  const { error, value } = newAcctSchema.validate(data, {abortEarly : false});  //options object can be passed in 
                                                                                  // by default if error occurs joi stops immediately after 1st error
                                                                                  // about early set to false will let it check for ALL error without stopping
  if(error) {
    console.log(error);
    return res.send(error.details);
  }
  res.send("Success - You are registered");

})
app.listen(3000, () => {
  console.log("listening on port 3000...");
})