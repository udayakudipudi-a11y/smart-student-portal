/* =========================
   LOGIN
========================= */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("loginMessage");


    /* Demo login */

    if (username === "student" && password === "1234") {

        message.style.color = "green";

        message.textContent = "Login successful!";


        setTimeout(function() {

            document
                .getElementById("loginScreen")
                .classList.add("hidden");

            document
                .getElementById("portal")
                .classList.remove("hidden");

        }, 500);

    }

    else {

        message.style.color = "red";

        message.textContent =
            "Invalid Student ID or Password.";

    }

});


/* =========================
   LOGOUT
========================= */

function logoutUser() {

    document
        .getElementById("portal")
        .classList.add("hidden");

    document
        .getElementById("loginScreen")
        .classList.remove("hidden");


    document.getElementById("loginForm").reset();

    document.getElementById("loginMessage").textContent = "";

}


/* =========================
   FORGOT PASSWORD
========================= */

function forgotPassword(event) {

    event.preventDefault();

    alert(
        "Password recovery is not connected in this prototype."
    );

}


/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId, button) {

    /* Hide all pages */

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active-page");

    });


    /* Show selected page */

    document
        .getElementById(pageId)
        .classList.add("active-page");


    /* Remove active state */

    const buttons =
        document.querySelectorAll(".nav-btn");

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    /* Add active state */

    button.classList.add("active");

}


/* =========================
   AI STUDY ASSISTANT
========================= */

function generateResponse() {

    const topic =
        document.getElementById("topic").value.trim();

    const helpType =
        document.getElementById("helpType").value;

    const result =
        document.getElementById("aiResult");


    if (topic === "") {

        result.innerHTML =
            "Please enter a topic first.";

        return;

    }


    /* Explain */

    if (helpType === "explain") {

        result.innerHTML =

            "<strong>Explanation:</strong><br><br>" +

            topic +
            " is an important academic topic. " +

            "Start by understanding its basic definition, " +
            "main concepts and practical examples. " +

            "Then revise important points and solve " +
            "practice questions.";

    }


    /* Revision */

    else if (helpType === "revision") {

        result.innerHTML =

            "<strong>Revision Plan for " +
            topic +
            ":</strong><br><br>" +

            "1. Understand the basic concepts.<br>" +
            "2. Review important definitions and formulas.<br>" +
            "3. Study examples and diagrams.<br>" +
            "4. Solve practice questions.<br>" +
            "5. Quickly revise the topic before the exam.";

    }


    /* Questions */

    else if (helpType === "questions") {

        result.innerHTML =

            "<strong>Practice Questions:</strong><br><br>" +

            "1. What is " + topic + "?<br>" +
            "2. Explain the main concepts of " + topic + ".<br>" +
            "3. What are the advantages of " + topic + "?<br>" +
            "4. Give a suitable example of " + topic + ".<br>" +
            "5. Explain the applications of " + topic + ".";

    }

}