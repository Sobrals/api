const express = require('express');

const app = express();
const router = express.Router();

router.get('/', (request, response)=> { response.json({msg: "Vamo ganhar esses 8000 ai"})})


app.listen(3333);