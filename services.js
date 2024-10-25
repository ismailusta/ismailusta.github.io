// Predefined appointments
let appointments = [];

// Modal handling
const modal = document.getElementById('randevuModal');
const btn= document.getElementById('randevuButton');
const btn2= document.getElementById('randevuButton2');
const btn3= document.getElementById('randevuButton3');
const span = document.getElementsByClassName('close')[0];

// Open modal
btn.onclick = function() {
    modal.style.display = 'flex';
}
btn2.onclick = function() {
    modal.style.display = 'flex';
}
btn3.onclick = function() {
    modal.style.display = 'flex';
}
// Close modal
span.onclick = function() {
    modal.style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Form submission
document.getElementById('appointmentForm').onsubmit = function(event) {
    event.preventDefault();

    // Get form values
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if the appointment already exists
    const existingAppointment = appointments.find(appointment => appointment.date === date && appointment.time === time);
    
    if (existingAppointment) {
        document.getElementById('message').textContent = 'Bu tarih ve saate zaten bir randevu var!';
        document.getElementById('message').style.color = 'red';
    } else {
        // Save the new appointment
        appointments.push({ date, time, name, email });
        document.getElementById('message').textContent = 'Randevunuz başarıyla alındı!';
        document.getElementById('message').style.color = 'green';

        // Clear the form
        document.getElementById('appointmentForm').reset();
    }
}
