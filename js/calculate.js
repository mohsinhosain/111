function totalExpenses() {
    const bua = document.getElementById("Bua")
    const cloth = document.getElementById("Cloth")
    const semester = document.getElementById("Semester")
    const buabill = parseFloat(bua.value)
    const clothbill = parseFloat(cloth.value)
    const semesterbill = parseFloat(semester.value)
    totalExp = buabill + clothbill + semesterbill;
    return totalExp;
}
function balance() {
    const capital = document.getElementById("income").value
    const remaining = capital - totalExpenses()
    return remaining;
}
document.getElementById("calculate").addEventListener("click", function () {
    const totalExpense = totalExpenses();

    document.getElementById("expense").innerText = totalExpense

    const remaining = balance();
    document.getElementById("balance").innerText = remaining

})
document.getElementById("save-btn").addEventListener("click", function () {
    const capital = document.getElementById("income").value
    const savings = parseInt(document.getElementById("save").value)
    const savingPercentage = savings / 100
    const savingAmount = (capital * savingPercentage)
    const remainings = balance() - savingAmount;
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainings




})
