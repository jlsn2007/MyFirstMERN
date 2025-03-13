//Array de metodos (C R U D )
const subsidiariesControllers = {};
import subsidiariesModel from "../models/Subsidiaries.js"

//Select
subsidiariesControllers.getSubsidiaries = async (req, res) => {
    const subsidiaries = await subsidiariesModel.find()
    res.json(subsidiaries)
}

//Insert
subsidiariesControllers.postSubsidiaries = async (req, res) => {
    const { name, address, telephone, schedule } = req.body;
    const newSubsidiaries = new subsidiariesModel ({ name, address, telephone, schedule })
    await newSubsidiaries.save()
    res.json({message: "Subsidiaries Insert"})
}

//Delete
subsidiariesControllers.deleteSubsidiaries = async (req, res) => {
    await subsidiariesModel.findOneAndDelete(req.params.id)
    res.json({message: "Subsidiaries Deleted"})
}

//Update
subsidiariesControllers.putSubsidiaries = async (req, res) => {
    const {name, address, telephone, schedule} = req.body;

    await subsidiariesModel.findByIdAndUpdate(req.params.id, {
        name,
        address,
        telephone,
        schedule
    }, {new: true}
);
res.json({ message: "Subsidiaries Updated"});
}

export default subsidiariesControllers