const reviewController = {};

import reviewModel from "../models/Reviews.js"

// SELECT
reviewController.getReviews = async (req, res) => {

    const reviews = await reviewModel.find().populate('idCustomer')
    res.json(reviews)

}

// INSERT
reviewController.postReviews = async (req, res) => {
    const {comment, rating, idCustomer} = req.body;
    const newReview = new reviewModel({comment, rating, idCustomer})
    await newReview.save()
    res.json({message: "Review Inserted"})
}

// DELETE
reviewController.deleteReviews = async (req, res) => {
    await reviewModel.findByIdAndDelete(req.params.id)
    res.json({message: "Review Deleted"})
}


// UPDATE
reviewController.updateReviews = async (req, res) => {
    const {comment, rating, idCustomer} = req.body;
    const updatedReview = await reviewModel.findByIdAndDelete(
    req.params.id,
    {
        comment,
        rating,
        idCustomer,
    },
    { new: true }
);
res.json({message: "Review Updated"})
};

export default reviewController;