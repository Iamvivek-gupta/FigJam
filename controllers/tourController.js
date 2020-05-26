exports.getAllTour =  (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'all tours are here'
    })
}

exports.createTour = (req, res, next) =>{
    res.status(201).json({
        status: 'success',
        message: 'tour created'
    })
}


exports.getOneTour = (req, res, next) =>{
    res.status(200).json({
        status: 'success',
        message: 'one tour fetched'
    })
}


exports.updateTour = (req, res, next) =>{
    res.status(200).json({
        status: 'success',
        message: 'tour updated'
    })
}


exports.deleteTour = (req, res, next) =>{
    res.status(204).json({
        status: 'success',
        message: null
    })
}