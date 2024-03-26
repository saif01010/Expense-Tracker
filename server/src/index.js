import app from './app';
import {connectionDB} from "./db/index.db.js";

const PORT = process.env.PORT || 3000;

connectionDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error(error);
    process.exit(1);
});