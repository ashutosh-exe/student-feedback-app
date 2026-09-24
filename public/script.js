const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value;

    try {
        const response = await fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                course,
                feedback
            })
        });

        const data = await response.json();

        if (response.ok) {
            message.textContent = data.message;
            form.reset();
            loadFeedback();
        } else {
            message.textContent = data.message;
        }

    } catch (error) {
        message.textContent = "Error submitting feedback.";
    }
});

async function loadFeedback() {
    const response = await fetch("/api/feedback");
    const feedbacks = await response.json();

    feedbackList.innerHTML = "";

    feedbacks.forEach((item) => {
        const card = document.createElement("div");
        card.className = "feedback-card";

        card.innerHTML = `
            <h3>${item.name}</h3>
            <strong>Course:</strong> ${item.course}
            <p>${item.feedback}</p>
        `;

        feedbackList.appendChild(card);
    });
}

loadFeedback();
