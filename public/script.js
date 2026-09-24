const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    try {
        const response = await fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                course,
                feedback
            })
        });

        const data = await response.json();

        if (response.ok) {
            message.textContent = data.message;
            message.style.color = "green";

            form.reset();
            loadFeedback();
        } else {
            message.textContent = data.message;
            message.style.color = "red";
        }

    } catch (error) {
        message.textContent = "Error submitting feedback.";
        message.style.color = "red";
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
            <strong>Email:</strong> ${item.email}<br>
            <strong>Course:</strong> ${item.course}
            <p>${item.feedback}</p>
        `;

        feedbackList.appendChild(card);
    });
}

loadFeedback();
