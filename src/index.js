
import 'dotenv/config'


import cors from 'cors'
import express from 'express'

import clientesController from './controlller/clientesController.js'


const server = express()


server.use(cors())
server.use(express.json())


server.use(clientesController)



server.listen(process.env.PORT, 
        () => console.log(`A API está funfando na porta ${process.env.PORT}`))