const { app } = require("./app.js");
const { conn, initialize } = require("./database/database.js");
const { Diet } = require("./database/database");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

conn.sync({ force: false }).then(
  () => {
    app.listen(PORT, () => {
      console.log(`%s listenin on port ${PORT} `);

      initialize();
    });
  },
  (err) => console.log(err)
);
