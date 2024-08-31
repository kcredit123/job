document.addEventListener('DOMContentLoaded', function() {
    // Form Validation and Dynamic Job Listings (existing code)
    // ...

    // Job Details
    const jobDetails = {
        title: 'Frontend Developer',
        company: 'Tech Corp',
        location: 'Remote',
        category: 'Frontend',
        description: 'Develop and maintain user interfaces for web applications.',
        requirements: 'Experience with HTML, CSS, JavaScript, and React.',
        email: 'hr@techcorp.com'
    };

    const jobTitleElement = document.getElementById('job-title');
    const companyElement = document.getElementById('company');
    const locationElement = document.getElementById('location');
    const categoryElement = document.getElementById('category');
    const descriptionElement = document.getElementById('description');
    const requirementsElement = document.getElementById('requirements');
    const emailElement = document.getElementById('apply-email');

    if (jobTitleElement) {
        jobTitleElement.textContent = jobDetails.title;
        companyElement.textContent = jobDetails.company;
        locationElement.textContent = jobDetails.location;
        categoryElement.textContent = jobDetails.category;
        descriptionElement.textContent = jobDetails.description;
        requirementsElement.textContent = jobDetails.requirements;
        emailElement.textContent = jobDetails.email;
        emailElement.href = `mailto:${jobDetails.email}`;
    }
});
