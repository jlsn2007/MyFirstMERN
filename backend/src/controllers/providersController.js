import providerModel from "../models/providers.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})


//Array funciones vacío
const providerController = {};

//SELECT
providerController.getAllProviders = async(req, res)=> {
    const providers = await providerModel.find();
    res.json(providers)
}

providerController.insertProviders = async (req, res) => {
    const { name, telephone, } = req.body;
    let imageURL = ""

    if(req.file){
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg"]
            }
        );
        imageURL = result.secure_url
    }

    const newProvider = new providerModel({name, telephone, image: imageURL})
    newProvider.save()

    res.json({ message: "Provider saved" });
};

export default providerController;