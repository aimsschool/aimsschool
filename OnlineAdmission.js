function checkClassSelection() {
    const classSelected = document.getElementById("class").value;
    const specializationField = document.getElementById("specializationField");

    if (classSelected === "1stYear" || classSelected === "2ndYear") {
        specializationField.style.display = "block"; // Show specialization dropdown
    } else {
        specializationField.style.display = "none";  // Hide specialization dropdown
    }
}
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});