
const themeToggleButton = document.getElementById('themeToggle')!;
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const skillsToggleButton = document.getElementById('skillsToggle')!;
const skillsList = document.getElementById('skillsList')!;
skillsToggleButton.addEventListener('click', () => {
    if (skillsList.classList.contains('hidden')) {
        skillsList.classList.remove('hidden');
        skillsToggleButton.textContent = 'Hide Skills';
    } else {
        skillsList.classList.add('hidden');
        skillsToggleButton.textContent = 'Show Skills';
    }
});

const experienceToggleButton = document.getElementById('experienceToggle')!;
const experienceList = document.getElementById('experienceList')!;
experienceToggleButton.addEventListener('click', () => {
    if (experienceList.classList.contains('hidden')) {
        experienceList.classList.remove('hidden');
        experienceToggleButton.textContent = 'Hide Experience';
    } else {
        experienceList.classList.add('hidden');
        experienceToggleButton.textContent = 'Show Experience';
    }
});

const downloadButton = document.getElementById('downloadResume')!;
downloadButton.addEventListener('click', () => {
    const resumeContainer = document.querySelector('.resume-container')!;
    const resumeContent = resumeContainer.innerHTML;

    console.log('Downloading resume content:', resumeContent);
    alert('Click Ok to proceed downloading your resume!');
});
