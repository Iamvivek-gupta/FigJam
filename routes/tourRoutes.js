const express = require("express");
const tourController = require("./../controllers/tourController");

const router = express.Router();

/**
 * @swagger
 * /api/v1/tours:
 *  get:
 *    description: Use to request all tours
 *    responses:
 *      '200':
 *        description: A successful response
 */

router
  .route("/")
  .get(tourController.getAllTour)
  .post(tourController.createTour);


router
  .route("/:id")
  .get(tourController.getOneTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);


  module.exports = router;
