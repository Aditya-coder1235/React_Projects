const Task=require('../model/task')

exports.getAllTasks=async(req,res)=>{
    try {
        const allTasks = await Task.find({ });

        res.status(200).json({message:"All Tasks Feched",Tasks:allTasks})
        
    } catch (error) {
        res.status(400).json({message:"Error during GetAllTasks"})
    }
}

exports.createTasks = async (req, res) => {
    try {
        let { title, description }=req.body;

        const newTask = new Task({ title, description });
        await newTask.save()

        res.status(200).json({message:"Task create successfully",task:newTask});

    } catch (error) {
        res.status(400).json({ message: "Error during create task" ,err:error})

    }
}



exports.deleteTaskById = async (req, res) => {
    try {
        let { id } = req.params;

        let deletedTask=await Task.findByIdAndDelete(id)

        res.status(200).json({ message: "Task Deleted success" })


    } catch (error) {
        res.status(400).json({ message: "Error during delete task" })

    }
}
