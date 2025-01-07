const axios = require("axios");
const API_URL = "http://192.168.51.181:8080/api/auth/local/register";
const API_TOKEN = "Bearer e50ffc8bdfd0f48a799af434ed77ca0ecff244dbb93dd90c06bbf98055916ad3e2d4241f0c2c4e0ba574b2cdd79b7593f53eb67ce30da1fa91f813dfbf1ccac7864ffd6cb7a77bb53a159e0a4b0f511dcdb1e52e0e1ca1618a5b1caa494e2f32942bf444ab683c9a317888ee9bc372bae60347c4e1289921b37db5f3afbee177";

var name = "Pongsatorn";
var mail = "s6602041520136@email.kmutnb.ac.th"

const payload = {
username : name,
email : mail,
password : "Pongsatorn.",

};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("Send Api Success", response.data);
  })
  .catch((err) => {
    console.log("Send Error", err.message);
  });