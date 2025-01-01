$(document).ready(function () {
    $(".h1").hover(function () {
        // Target only the <h1> inside .h1
        $(this).find("h1").fadeOut(1000).fadeIn(1000);
    });
    $(".sub").first().click(function () {
        
        let score = 0;

        // Reset background colors
        $("input[type='radio']").parent().css("background-color", "");

        // Check question 1
        const question1 = $("input[name='question1']:checked");
        if (question1.length === 0) {
            $("input[name='question1']").parent().css("background-color", "lightyellow");
        } else if (question1.parent().text().trim() === "A)  var x = 10;") {
            score += 1;
        } else {
            question1.parent().css("background-color", "pink");
        }

        // Check question 2
        const question2 = $("input[name='question2']:checked");
        if (question2.length === 0) {
            $("input[name='question2']").parent().css("background-color", "lightyellow");
        } else if (question2.parent().text().trim() === "C) String") {
            score += 1;
        } else {
            question2.parent().css("background-color", "pink");
        }

        // Check question 3
        const question3 = $("input[name='question3']:checked");
        if (question3.length === 0) {
            $("input[name='question3']").parent().css("background-color", "lightyellow");
        } else if (question3.parent().text().trim() === "A) /* This is a comment */") {
            score += 1;
        } else {
            question3.parent().css("background-color", "pink");
        }

        // Check question 4
        const question4 = $("input[name='question4']:checked");
        if (question4.length === 0) {
            $("input[name='question4']").parent().css("background-color", "lightyellow");
        } else if (question4.parent().text().trim() === 'D) console.log("Hello World")') {
            score += 1;
        } else {
            question4.parent().css("background-color", "pink");
        }

        // Check question 5
        const question5 = $("input[name='question5']:checked");
        if (question5.length === 0) {
            $("input[name='question5']").parent().css("background-color", "lightyellow");
        } else if (question5.parent().text().trim() === "B) Checks if a value is not a number") {
            score += 1;
        } else {
            question5.parent().css("background-color", "pink");
        }

        // Check question 6
        const question6 = $("input[name='question6']:checked");
        if (question6.length === 0) {
            $("input[name='question6']").parent().css("background-color", "lightyellow");
        } else if (question6.parent().text().trim() === "C) let arr = [1, 2, 3];") {
            score += 1;
        } else {
            question6.parent().css("background-color", "pink");
        }

        // Check question 7
        const question7 = $("input[name='question7']:checked");
        if (question7.length === 0) {
            $("input[name='question7']").parent().css("background-color", "lightyellow");
        } else if (question7.parent().text().trim() === "B) if (x > 5)") {
            score += 1;
        } else {
            question7.parent().css("background-color", "pink");
        }

        // Check question 8
        const question8 = $("input[name='question8']:checked");
        if (question8.length === 0) {
            $("input[name='question8']").parent().css("background-color", "lightyellow");
        } else if (question8.parent().text().trim() === "A) function myFunction() {}") {
            score += 1;
        } else {
            question8.parent().css("background-color", "pink");
        }

        // Check question 9
        const question9 = $("input[name='question9']:checked");
        if (question9.length === 0) {
            $("input[name='question9']").parent().css("background-color", "lightyellow");
        } else if (question9.parent().text().trim() === "A) // This is a comment") {
            score += 1;
        } else {
            question9.parent().css("background-color", "pink");
        }

        // Check question 10
        const question10 = $("input[name='question10']:checked");
        if (question10.length === 0) {
            $("input[name='question10']").parent().css("background-color", "lightyellow");
        } else if (question10.parent().text().trim() === 'A) "object"') {
            score += 1;
        } else {
            question10.parent().css("background-color", "pink");
        }

        // Check question 11
        const question11 = $("input[name='question11']:checked");
        if (question11.length === 0) {
            $("input[name='question11']").parent().css("background-color", "lightyellow");
        } else if (question11.parent().text().trim() === "A) Number") {
            score += 1;
        } else {
            question11.parent().css("background-color", "pink");
        }

        // Display the result
        $(".result h2").text("Your Result is: " + score);
    });
});
