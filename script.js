    // Sample doctor data (you'd fetch this from a backend API)
    const doctors = [{
            name: 'Dr. John Doe',
            rating: 4.8
        },
        {
            name: 'Dr. Jane Smith',
            rating: 4.9
        },
        {
            name: 'Dr. Sam Curran',
            rating: 4.5
        },
        // Add more doctors here
    ];

    const doctorCardsContainer = document.querySelector('.doctor-cards');

    function createDoctorCard(doctor) {
        const card = document.createElement('div');
        card.classList.add('doctor-card');
        card.innerHTML = `
            <h5 class="card-title">${doctor.name}</h5>
            <h4 class="card-text">Rating: ${doctor.rating}</h4>
            <p class="card-text">Number of tests: 53</p>
            <p class="card-text">MRP: 10,000 crossed NOW 8,490</p>
            <button class="btn btn-primary btn-book" data-booked="false">Book Appointment</button>
        `;
        return card;
    }

    function populateDoctorCards() {
        doctors.forEach((doctor) => {
            const card = createDoctorCard(doctor);
            doctorCardsContainer.appendChild(card);
        });
    }

    // Initialize the page with doctor listings
    populateDoctorCards();

    // Function to handle button click and show appointment form
    doctorCardsContainer.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('btn-book')) {
            const button = event.target;
            const isBooked = button.getAttribute('data-booked') === 'true';

            if (!isBooked) {
                // Show the appointment form
                showAppointmentForm(button);
            }
        }
    });

    // Function to show the appointment form and Back button
    function showAppointmentForm(button) {
        // Hide all doctor cards
        const doctorCards = document.querySelectorAll('.doctor-card');
        doctorCards.forEach((card) => {
            card.style.display = 'none';
        });

        // Show the appointment form
        const appointmentForm = document.getElementById('appointment-form');
        appointmentForm.style.display = 'block';

        // Show the Back button
        const backButton = document.getElementById('back-button');
        backButton.style.display = 'inline-block'; // Display the button as an inline block
        backButton.style.marginRight = '10px'; // Add a small margin to create a gap
    }

    // Function to handle the "Back" button click
    function handleBackButton() {
        // Hide the appointment form
        const appointmentForm = document.getElementById('appointment-form');
        appointmentForm.style.display = 'none';

        // Show all doctor cards again
        const doctorCards = document.querySelectorAll('.doctor-card');
        doctorCards.forEach((card) => {
            card.style.display = 'block';
        });

        // Hide the Back button
        const backButton = document.getElementById('back-button');
        backButton.style.display = 'none';
    }

    // Add a click event listener to the "Back" button
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', handleBackButton);
