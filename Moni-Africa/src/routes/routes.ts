const express= require('express')
import{allUsers,createUser,createTransaction} from "../controllers/userControllers"

const router= express.Router();

router.get('/',allUsers)

router.post('/user',createUser)

router.post('/transaction',createTransaction)
export default router