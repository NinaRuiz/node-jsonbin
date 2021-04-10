import express from 'express';
import env from 'dotenv';

env.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 8080, () => {
    console.log('server is listening on port ' + process.env.PORT || 8080);
})
