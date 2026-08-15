function calculateBill() {
    // Read quantities and prices from the form
    let q1 = Number(document.getElementById("q1").value);
    let p1 = Number(document.getElementById("p1").value);
    let q2 = Number(document.getElementById("q2").value);
    let p2 = Number(document.getElementById("p2").value);
    let q3 = Number(document.getElementById("q3").value);
    let p3 = Number(document.getElementById("p3").value);

    // Calculate individual product amounts
    let amount1 = q1 * p1;
    let amount2 = q2 * p2;
    let amount3 = q3 * p3;

    // Calculate total bill
    let total = amount1 + amount2 + amount3;

    // Apply 10% discount if total exceeds ₹2000
    let discount = total > 2000 ? total * 0.10 : 0;

    // Calculate final payable amount
    let finalAmount = total - discount;

    document.getElementById("result").innerHTML =
        "<b>Product 1 Amount:</b> ₹" + amount1.toFixed(2) + "<br>" +
        "<b>Product 2 Amount:</b> ₹" + amount2.toFixed(2) + "<br>" +
        "<b>Product 3 Amount:</b> ₹" + amount3.toFixed(2) + "<hr>" +
        "<b>Total Amount:</b> ₹" + total.toFixed(2) + "<br>" +
        "<b>Discount (10%):</b> ₹" + discount.toFixed(2) + "<br><br>" +
        "<h3>Final Payable Amount: ₹" + finalAmount.toFixed(2) + "</h3>";
}
