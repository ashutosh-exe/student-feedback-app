const test = require("node:test");
const assert = require("node:assert");
const { validateFeedback } = require("../validation");

// Test 1: All valid fields
test("Valid feedback should be accepted", () => {
    const result = validateFeedback({
        name: "Rahul",
        email: "rahul@gmail.com",
        course: "DevOps",
        feedback: "The course is very useful."
    });

    assert.strictEqual(result.valid, true);
});

// Test 2: Empty name
test("Empty name should be rejected", () => {
    const result = validateFeedback({
        name: "",
        email: "rahul@gmail.com",
        course: "DevOps",
        feedback: "Good course."
    });

    assert.strictEqual(result.valid, false);
});

// Test 3: Empty email
test("Empty email should be rejected", () => {
    const result = validateFeedback({
        name: "Rahul",
        email: "",
        course: "DevOps",
        feedback: "Good course."
    });

    assert.strictEqual(result.valid, false);
});

// Test 4: Email without @
test("Email without @ should be rejected", () => {
    const result = validateFeedback({
        name: "Rahul",
        email: "rahulgmail.com",
        course: "DevOps",
        feedback: "Good course."
    });

    assert.strictEqual(result.valid, false);
});

// Test 5: Empty course
test("Empty course should be rejected", () => {
    const result = validateFeedback({
        name: "Rahul",
        email: "rahul@gmail.com",
        course: "",
        feedback: "Good course."
    });

    assert.strictEqual(result.valid, false);
});

// Test 6: Empty feedback
test("Empty feedback should be rejected", () => {
    const result = validateFeedback({
        name: "Rahul",
        email: "rahul@gmail.com",
        course: "DevOps",
        feedback: ""
    });

    assert.strictEqual(result.valid, false);
});

// Test 7: All fields empty
test("All empty fields should be rejected", () => {
    const result = validateFeedback({
        name: "",
        email: "",
        course: "",
        feedback: ""
    });

    assert.strictEqual(result.valid, false);
});

// Test 8: Valid email with @ should be accepted
test("Email containing @ should be accepted", () => {
    const result = validateFeedback({
        name: "Amit",
        email: "amit@example.com",
        course: "Cloud Computing",
        feedback: "Excellent course."
    });

    assert.strictEqual(result.valid, true);
});
