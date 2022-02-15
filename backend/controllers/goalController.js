const asyncHandler = require("express-async-handler");

/**
 * Fetches all the goals of a user.
 * @param {object} req
 * @param {object} res
 * @route GET /api/goals
 * @access PRIVATE
 */
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 200, message: "Get goal." });
});

/**
 * Sets a goal.
 * @param {object} req
 * @param {object} res
 * @route POST /api/goals
 * @access PRIVATE
 */
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field in the body.");
  }
  res.status(200).json({ status: 200, message: "Set goal." });
});

/**
 * Updates a goal with a given id.
 * @param {object} req
 * @param {object} res
 * @route POST /api/goals
 * @access PRIVATE
 */
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 200, message: `Put goal: ${req.params.id}` });
});

/**
 * Deletes a goal.
 * @param {object} req
 * @param {object} res
 * @route POST /api/goals
 * @access PRIVATE
 */
const deleteGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ status: 200, message: `Delete goal: ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
