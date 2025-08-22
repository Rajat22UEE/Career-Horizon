// backend/controllers/hrController.js
import HRContact from "../models/HRContact.js";
import createError from "../utils/errorHandler.js";

// ➕ Add new HR contact
export const createHRContact = async (req, res, next) => {
  try {
    const hr = new HRContact(req.body);
    await hr.save();
    res.status(201).json(hr);
  } catch (err) {
    next(err);
  }
};

// 📂 Get all HR contacts
export const getHRContacts = async (req, res, next) => {
  try {
    const hrs = await HRContact.find();
    res.json(hrs);
  } catch (err) {
    next(err);
  }
};

// 📂 Get one HR by ID
export const getHRContactById = async (req, res, next) => {
  try {
    const hr = await HRContact.findById(req.params.id);
    if (!hr) return next(createError(404, "HR Contact not found"));
    res.json(hr);
  } catch (err) {
    next(err);
  }
};

// ✏️ Update HR
export const updateHRContact = async (req, res, next) => {
  try {
    const hr = await HRContact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hr) return next(createError(404, "HR Contact not found"));
    res.json(hr);
  } catch (err) {
    next(err);
  }
};

// ❌ Delete HR
export const deleteHRContact = async (req, res, next) => {
  try {
    const hr = await HRContact.findByIdAndDelete(req.params.id);
    if (!hr) return next(createError(404, "HR Contact not found"));
    res.json({ message: "HR Contact deleted" });
  } catch (err) {
    next(err);
  }
};
