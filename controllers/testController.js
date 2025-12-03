import test from "../models/test.js";

// Create item
export const createTestData = async (req, res) => {
  const { name } = req.body;

  const testItem = await test.create({ name });

  res.status(201).json({
    success: true,
    message: "Data created successfully",
    data: testItem,
  });
};

// Get all items
export const getTestData = async (req, res) => {
  const data = await test.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: data.length,
    data,
  });
};
