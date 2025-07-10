function redirectToDetails(userType) {
    document.getElementById('landingPage').style.display = 'none';

    if (userType === 'user') {
        document.getElementById('userDetails').style.display = 'block';
    } else if (userType === 'driver') {
        document.getElementById('driverLogin').style.display = 'block';
    }
}

function loginUser(userType) {
    if (userType === 'user') {
        const userName = document.getElementById('userName').value;
        const userPhoneNumber = document.getElementById('userPhoneNumber').value;
        const userLocation = document.getElementById('userLocation').value;
        const userGmail = document.getElementById('userGmail').value;

        // Placeholder validation logic
        if (userName && userPhoneNumber && userLocation && userGmail) {
            document.getElementById('statusMessage').textContent = `Welcome, ${userName}!`;
            document.getElementById('mainContent').style.display = 'block';
        } else {
            document.getElementById('statusMessage').textContent = 'Please fill out all fields.';
        }
    } else if (userType === 'driver') {
        const driverName = document.getElementById('driverName').value;
        const driverPhoneNumber = document.getElementById('driverPhoneNumber').value;
        const driverLocation = document.getElementById('driverLocation').value;
        const ambulanceNumber = document.getElementById('ambulanceNumber').value;

        // Placeholder validation logic
        if (driverName && driverPhoneNumber && driverLocation && ambulanceNumber) {
            document.getElementById('statusMessage').textContent = `Welcome, ${driverName}!`;
            document.getElementById('sosPage').style.display = 'block';
        } else {
            document.getElementById('statusMessage').textContent = 'Please fill out all fields.';
        }
    }
}

// Additions to hide irrelevant sections on initial load
document.getElementById('mainContent').style.display = 'none';
document.getElementById('sosPage').style.display = 'none';
document.getElementById('sosResponsePage').style.display = 'none';
document.getElementById('hospitalDetailsPage').style.display = 'none';
document.getElementById('medicationFarmPage').style.display = 'none';

function sosButton() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('sosPage').style.display = 'block';
}

function handleSOSResponse(response) {
    document.getElementById('sosPage').style.display = 'none';
    document.getElementById('sosResponsePage').style.display = 'block';

    if (response === 'accept') {
        // Handle SOS acceptance logic
        document.getElementById('sosResponsePage').innerHTML = '<h2>You have received a SOS message</h2>' +
            '<p>Driver Details:</p>' +
            '<ul>' +
            '<li>Name: Kavish</li>' +
            '<li>Phone Number: 3562772772</li>' +
            '<li>Location: <a href="https://maps.app.goo.gl/rbN3GitrQBAHbsbu9">location</a></li>' +
            '</ul>' +
            '<button onclick="goBack(\'mainContent\')">Back</button>';
    } else if (response === 'deny') {
        // Handle SOS denial logic
        document.getElementById('sosResponsePage').innerHTML = '<h2>You have denied the SOS request</h2>' +
            '<button onclick="goBack(\'mainContent\')">Back</button>';
    }
}

function hospitalDetailsButton() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('hospitalDetailsPage').style.display = 'block';
}

function medicationFarmButton() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('medicationFarmPage').style.display = 'block';
}

function goBack(pageId) {
    document.getElementById(pageId).style.display = 'block';
    document.getElementById('sosPage').style.display = 'none';
    document.getElementById('sosResponsePage').style.display = 'none';
    document.getElementById('hospitalDetailsPage').style.display = 'none';
    document.getElementById('medicationFarmPage').style.display = 'none';
}
