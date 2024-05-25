const CarEntry = require('../models/carEntry');

const addEntry = async (req, res) => {
    try {
        const { customerName, phoneNumber, carBrand, carModel, regdNo, service, serviceCharge } = req.body;

        // Validation (optional, but good to have)
        if (!customerName || !phoneNumber || !carBrand || !carModel || !regdNo || !service || !serviceCharge) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const newCarEntry = new CarEntry({
            customerName,
            phoneNumber,
            carBrand,
            carModel,
            regdNo,
            service,
            serviceCharge
        });

        await newCarEntry.save();

        return res.status(201).json({ success: true, carEntry: newCarEntry });
    } catch (error) {
        console.error("Error adding car entry:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

const getAllEntries = async (req, res) => {
    try {
        const entries = await CarEntry.find();
        return res.status(200).json({ success: true, entries });
    } catch (error) {
        console.error("Error fetching car entries:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

const updateEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const { serviceCharge } = req.body;

        if (serviceCharge === undefined) {
            return res.status(400).json({ error: "Service charge is required for update." });
        }

        const updatedEntry = await CarEntry.findByIdAndUpdate(
            id,
            { serviceCharge },
            { new: true, runValidators: true }
        );

        if (!updatedEntry) {
            return res.status(404).json({ error: "Entry not found" });
        }

        return res.status(200).json({ success: true, carEntry: updatedEntry });
    } catch (error) {
        console.error("Error updating car entry:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

const deleteEntry = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedEntry = await CarEntry.findByIdAndDelete(id);

        if (!deletedEntry) {
            return res.status(404).json({ error: "Entry not found" });
        }

        return res.status(200).json({ success: true, msg: "Entry deleted successfully" });
    } catch (error) {
        console.error("Error deleting car entry:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

const deleteAllEntries = async (req, res) => {
    try {
        await CarEntry.deleteMany();
        return res.status(200).json({ success: true, msg: "All entries deleted successfully" });
    } catch (error) {
        console.error("Error deleting all car entries:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

module.exports = { addEntry, getAllEntries, updateEntry, deleteEntry, deleteAllEntries };
