// Mock student data for the system
const students = [
    {
        trackingNumber: "12345",
        name: "Azan",
        fatherName: "Khan",
        college: "AIMS College FCS Campus",
        class: "5th Grade",  // Example class
        photo: "student1.jpg",
        monthlyFee: 3000,  // Example fee for Class 1-10
        remainingFee: 1500, // Example remaining fee
    },
    {
        trackingNumber: "67890",
        name: "Fatima Khan",
        fatherName: "Khan",
        college: "AIMS College FCS Campus",
        class: "2nd Year",  // Example class
        photo: "student2.jpg",
        monthlyFee: 5000,  // Example fee for 1st & 2nd Year
        remainingFee: 2000, // Example remaining fee
    }
    // You can add more student objects here
];

// Function to search student based on tracking number and selected options
function searchStudent() {
    const trackingNumberInput = document.getElementById('trackingNumber').value;
    const collegeInput = "AIMS College FCS Campus"; // Fixed college name
    const gradeInput = document.getElementById('grade').value;

    // Find the student by tracking number, fixed college, and grade
    const student = students.find(stud => 
        stud.trackingNumber === trackingNumberInput &&
        stud.college === collegeInput &&
        stud.class === gradeInput
    );

    if (student) {
        // Display student details if found
        document.getElementById('studentPhoto').src = student.photo;
        document.getElementById('displayName').innerText = "Name: " + student.name;
        document.getElementById('displayFatherName').innerText = "Father's Name: " + student.fatherName;
        document.getElementById('displayMonthlyFee').innerText = "Monthly Fee: " + student.monthlyFee + " PKR";
        document.getElementById('displayRemainingFee').innerText = "Remaining Fee: " + student.remainingFee + " PKR";

        // Make student info visible
        document.getElementById('studentInfo').style.display = 'block';
    } else {
        alert("No student found with the provided details.");
        document.getElementById('studentInfo').style.display = 'none';
    }
}
