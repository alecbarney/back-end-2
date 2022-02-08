const express = require('express');
const cors = require('cors');
const { getHouses, updateHouses, createHouses, deleteHouse } = require('./controller');

const app = express();

SERVER_PORT = 4004
app.use(express.json())
app.use(cors())

app.get('/api/houses', getHouses)

app.post('/api/houses', createHouses)

app.put('/api/houses/:id', updateHouses)

app.delete('/api/houses/:id', deleteHouse)


app.listen(SERVER_PORT, ()=> console.log(`This shit be working on port ${SERVER_PORT}`))