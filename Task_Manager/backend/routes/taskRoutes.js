const express=require('express')
const { getAllTasks, createTasks, deleteTaskById } = require('../controller/taskController')
const router=express.Router()

router.get('/getAll',getAllTasks)//fetching all tasks
router.post('/create',createTasks)//creating tasks
router.delete('/delete/:id',deleteTaskById)//delete task


module.exports=router