const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Store feedback in memory
const feedbacks = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Submit feedback
app.post("/api/feedback", (req, res) => {
    const { name, course, feedback } = req.body;

    if (!name || !course || !feedback) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    const newFeedback = {
        id: Date.now(),
        name,
        course,
        feedback
    };

    feedbacks.push(newFeedback);

    res.status(201).json({
        message: "Feedback submitted successfully!",
        feedback: newFeedback
    });
});

// Get all feedback
app.get("/api/feedback", (req, res) => {
    res.json(feedbacks);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
