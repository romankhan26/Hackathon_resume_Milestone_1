// script.ts
// Theme Toggle Functionality
var themeToggleButton = document.getElementById('themeToggle');
themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
// Skills Toggle Functionality
var skillsToggleButton = document.getElementById('skillsToggle');
var skillsList = document.getElementById('skillsList');
skillsToggleButton.addEventListener('click', function () {
    if (skillsList.classList.contains('hidden')) {
        skillsList.classList.remove('hidden');
        skillsToggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsList.classList.add('hidden');
        skillsToggleButton.textContent = 'Show Skills';
    }
});
// Experience Toggle Functionality
var experienceToggleButton = document.getElementById('experienceToggle');
var experienceList = document.getElementById('experienceList');
experienceToggleButton.addEventListener('click', function () {
    if (experienceList.classList.contains('hidden')) {
        experienceList.classList.remove('hidden');
        experienceToggleButton.textContent = 'Hide Experience';
    }
    else {
        experienceList.classList.add('hidden');
        experienceToggleButton.textContent = 'Show Experience';
    }
});
// Download Resume Functionality (for demonstration purposes)
var downloadButton = document.getElementById('downloadResume');
downloadButton.addEventListener('click', function () {
    var resumeContainer = document.querySelector('.resume-container');
    var resumeContent = resumeContainer.innerHTML;
    console.log('Downloading resume content:', resumeContent);
    alert('Click Ok to proceed downloading your resume!');
});
