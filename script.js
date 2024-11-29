
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    
    // Select all action buttons
    const actionButtons = document.querySelectorAll('.action-btn');

    // Add hover effect to action buttons
    actionButtons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            button.style.backgroundColor = '#45a049'; // Darker green on hover
        });
        button.addEventListener('mouseleave', function() {
            button.style.backgroundColor = '#4CAF50'; // Original green color
        });
    });

    // Handle 'Purchase Position' button click
    const purchaseButton = document.querySelector('.action-btn:nth-of-type(1)');
    if (purchaseButton) {
        purchaseButton.addEventListener('click', function() {
            alert('Position purchased successfully!');
            // Add further logic for the purchase process here
        });
    }

    // Handle 'Invite Others' button click
    const inviteButton = document.querySelector('.action-btn:nth-of-type(2)');
    if (inviteButton) {
        inviteButton.addEventListener('click', function() {
            alert('Invitation link copied! Share it with others.');
            // Add further logic for copying the invitation link here
        });
    }

    // Make circles responsive for mobile
    const circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle) {
        circle.style.width = '80px'; // Resize for mobile screens
        circle.style.height = '80px';
        circle.style.fontSize = '1.2em'; // Make text inside circles smaller for mobile
    });

    // Function to update the layout for smaller screens (responsive)
    function adjustLayout() {
        const width = window.innerWidth;
        if (width < 600) {
            document.body.style.fontSize = '14px'; // Adjust font size for smaller screens
            document.querySelectorAll('.circle').forEach(function(circle) {
                circle.style.width = '80px'; 
                circle.style.height = '80px';
                circle.style.fontSize = '1.2em';
            });
        } else {
            document.body.style.fontSize = '16px'; // Reset for larger screens
            document.querySelectorAll('.circle').forEach(function(circle) {
                circle.style.width = '100px';
                circle.style.height = '100px';
                circle.style.fontSize = '1.5em';
            });
        }
    }

    // Adjust layout on page load and resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
