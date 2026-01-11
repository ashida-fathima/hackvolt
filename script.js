// Career data for each stream with emojis
const careers = {
    science: [
        'Doctor 🩺', 'Engineer 🔧', 'Data Scientist 💻', 
        'Biotechnologist 🧬', 'Astronomer 🔭', 'Pharmacist 💊'
    ],
    commerce: [
        'CA 💼', 'Banker 🏦', 'Marketing 📊', 
        'Investment Banker 💰', 'Entrepreneur 🚀', 'Financial Analyst 📈'
    ],
    arts: [
        'Lawyer ⚖️', 'Journalist 📰', 'Graphic Designer 🎨', 
        'Actor 🎭', 'Content Creator 📱', 'Interior Designer 🏠'
    ]
};

function showStreams() {
    const home = document.getElementById('home');
    const streams = document.getElementById('streams');
    
    home.style.opacity = '0';
    setTimeout(() => {
        home.classList.add('hidden');
        streams.classList.remove('hidden');
        streams.style.opacity = '0';
        setTimeout(() => {
            streams.style.opacity = '1';
        }, 50);
    }, 300);
}

function showCareers(stream) {
    const streamsPage = document.getElementById('streams');
    const careersPage = document.getElementById('careers');
    
    streamsPage.style.opacity = '0';
    setTimeout(() => {
        streamsPage.classList.add('hidden');
        careersPage.classList.remove('hidden');
        careersPage.style.opacity = '0';
        
        document.getElementById('careerTitle').textContent = stream.toUpperCase() + ' Careers';
        const careerList = document.getElementById('careerList');
        careerList.innerHTML = '';
        
        setTimeout(() => {
            careersPage.style.opacity = '1';
            
            careers[stream].forEach((career, index) => {
                const li = document.createElement('li');
                li.className = 'student-card';
                li.innerHTML = `<strong>${career}</strong>`;
                li.style.animationDelay = `${index * 0.15}s`;
                li.style.opacity = '0';
                careerList.appendChild(li);
                
                // Trigger animation
                setTimeout(() => {
                    li.style.opacity = '1';
                }, index * 120);
            });
        }, 50);
    }, 300);
}

function goHome() {
    const home = document.getElementById('home');
    const careers = document.getElementById('careers');
    const streams = document.getElementById('streams');
    const assessment = document.getElementById('assessment');
    
    // Fade out current page
    if (!careers.classList.contains('hidden')) careers.style.opacity = '0';
    if (!streams.classList.contains('hidden')) streams.style.opacity = '0';
    if (!assessment.classList.contains('hidden')) assessment.style.opacity = '0';
    
    setTimeout(() => {
        careers.classList.add('hidden');
        streams.classList.add('hidden');
        assessment.classList.add('hidden');
        home.classList.remove('hidden');
        document.getElementById('mainBody').className = '';
        home.style.opacity = '0';
        setTimeout(() => {
            home.style.opacity = '1';
        }, 50);
    }, 300);
}

function goStreams() {
    const careers = document.getElementById('careers');
    const streams = document.getElementById('streams');
    
    careers.style.opacity = '0';
    setTimeout(() => {
        careers.classList.add('hidden');
        streams.classList.remove('hidden');
        streams.style.opacity = '0';
        setTimeout(() => {
            streams.style.opacity = '1';
        }, 50);
    }, 300);
}

function goToStudentAssessment() {
   
    window.location.href = "sd.html";

    document.getElementById('home').classList.add('hidden');
    document.getElementById('assessment').classList.remove('hidden');
}