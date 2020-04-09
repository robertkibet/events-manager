const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) =>
  res.send({
    api: "healthy",
  })
);

app.listen(port, () => {
    console.log(
        {
            'api':'healthy'
        }
      )
    console.log(`[API running] http://localhost:${port}`);
  
});
