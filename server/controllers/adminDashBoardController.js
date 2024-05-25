const CarEntry = require('../models/carEntry');

const getEntriesByServiceType = async (req, res) => {
    try {
        const { serviceType } = req.query;
        if (!serviceType) {
            return res.status(400).json({ error: "Service type is required" });
        }

        const entries = await CarEntry.find({ service: serviceType });
        return res.status(200).json({ success: true, entries });
    } catch (error) {
        console.error("Error fetching entries by service type:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

const getEntriesByCustomerName = async (req, res) => {
    try {
        const { customerName } = req.query;
        if (!customerName) {
            return res.status(400).json({ error: "Customer name is required" });
        }

        const entries = await CarEntry.find({ customerName: new RegExp(customerName, 'i') });
        return res.status(200).json({ success: true, entries });
    } catch (error) {
        console.error("Error fetching entries by customer name:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

const getEntriesByDate = async (req, res) => {
    try {
        const { type, date } = req.query;
        if (!type || !date) {
            return res.status(400).json({ error: "Date type and date are required" });
        }

        let startDate, endDate;
        switch (type) {
            case 'daily':
                startDate = new Date(date);
                endDate = new Date(date);
                endDate.setDate(endDate.getDate() + 1);
                break;
            case 'monthly':
                startDate = new Date(date);
                endDate = new Date(date);
                endDate.setMonth(endDate.getMonth() + 1);
                break;
            case 'yearly':
                startDate = new Date(date);
                endDate = new Date(date);
                endDate.setFullYear(endDate.getFullYear() + 1);
                break;
            default:
                return res.status(400).json({ error: "Invalid date type" });
        }

        const entries = await CarEntry.find({
            createdAt: {
                $gte: startDate,
                $lt: endDate
            }
        });

        return res.status(200).json({ success: true, entries });
    } catch (error) {
        console.error("Error fetching entries by date:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

module.exports = { getEntriesByServiceType, getEntriesByCustomerName, getEntriesByDate };
