import app from "./app";
import { connectDB } from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(4000, () => {
      console.log(`Server is running on http://localhost:4000`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
