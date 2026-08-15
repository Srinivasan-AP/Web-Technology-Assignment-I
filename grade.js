function calculateGrade() {
    // Store five subject marks as numeric values
    let marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    let total = 0;

    // Iteration statement to calculate total
    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;
    let grade = getGrade(average);
    let status = marks.every(mark => mark >= 40) ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "<b>Total:</b> " + total + " / 500<br>" +
        "<b>Average:</b> " + average.toFixed(2) + "<br>" +
        "<b>Grade:</b> " + grade + "<br>" +
        "<b>Status:</b> " + status;
}

// User-defined function using selection statements
function getGrade(avg) {
    if (avg >= 90) return "A+";
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 50) return "D";
    return "F";
}
