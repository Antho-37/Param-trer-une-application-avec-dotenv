const app = require("./src/app");

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened !");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
