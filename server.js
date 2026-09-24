const express = require("express");
const path = require("path");
const { validateFeedback } = require("./validation");


const app = express();
const PORT = process.env.PORT || 3000;

// Store feedback in memory
const feedbacks = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Submit feedback
app.post("/api/feedback", (req, res) => {

    const validation = validateFeedback(req.body);

    if (!validation.valid) {
        return res.status(400).json({
            message: validation.message
        });
    }

    const { name, email, course, feedback } = req.body;

    const newFeedback = {
        id: Date.now(),
        name,
        email,
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
