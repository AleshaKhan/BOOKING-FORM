// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Pikaday date picker
    var picker = new Pikaday({ 
        field: document.getElementById('date'),
        format: 'YYYY-MM-DD',
        toString(date, format) {
            // Use moment.js to format the date
            return moment(date).format(format);
        },
        parse(dateString, format) {
            // Use moment.js to parse the date
            return moment(dateString, format).toDate();
        }
    });

    // Form validation
    document.getElementById('reservation-form').addEventListener('submit', function (event) {
        var form = event.target;
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill out all required fields.');
        }
    });
});
