// Mock student data for demonstration
const students = [
    {
        trackingNumber: "12345",
        name: "Azan Khan",
        class: "5th Grade",
        totalMarks: 450,
        maxMarks: 500,
        position: 2,
        resultPDF: "results/azan_khan_result.pdf"
    },
    {
        trackingNumber: "67890",
        name: "Fatima Khan",
        class: "2nd Year",
        totalMarks: 850,
        maxMarks: 1000,
        position: 1,
        resultPDF: "results/fatima_khan_result.pdf"
    }
    // Add more students as needed
];

// Function to check the student's result based on tracking number and class
function checkResult() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const classSelect = document.getElementById('classSelect').value;

    // Find the student based on tracking number and class
    const student = students.find(stud => 
        stud.trackingNumber === trackingNumber && 
        stud.class === classSelect
    );

    if (student) {
        // Calculate percentage
        const percentage = ((student.totalMarks / student.maxMarks) * 100).toFixed(2);

        // Display student details
        document.getElementById('studentName').innerText = student.name;
        document.getElementById('totalMarks').innerText = student.totalMarks + " / " + student.maxMarks;
        document.getElementById('percentage').innerText = percentage + "%";
        document.getElementById('position').innerText = student.position + " in class";

        // Display download PDF link
        document.getElementById('downloadPDFLink').innerHTML = 
            `<a href="${student.resultPDF}" target="_blank">Download ${student.name}'s Result PDF</a>`;

        // Show the result section
        document.getElementById('resultInfo').style.display = 'block';
    } else {
        alert("No result found for the provided tracking number and class.");
        document.getElementById('resultInfo').style.display = 'none';
    }
}
// JavaScript to toggle the mobile menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});