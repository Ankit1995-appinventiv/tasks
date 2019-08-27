const db = require("./model");
let flag = 0;
module.exports = {
  postdata(req, res) {
    let json = req.body;
    for (let i = 0; i < db.length; i++) {
      if (
        db[i].name == json.name &&
        db[i].age == json.age &&
        db[i].mob == json.mob
      ) {
        flag = 1;
        res.sendStatus(200);
        break;
      } else flag = 0;
    }
    if (flag == 0) {
      res.sendStatus(404);
    }

    res.end();
  }
};
