
// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Drag and drop functionality for schedule
let draggedElement = null;

document.addEventListener('DOMContentLoaded', function () {
    const draggableBlocks = document.querySelectorAll('.draggable-block');
    const dayColumns = document.querySelectorAll('.day-column');

    draggableBlocks.forEach(block => {
        block.addEventListener('dragstart', function (e) {
            draggedElement = this;
            this.style.opacity = '0.5';
        });

        block.addEventListener('dragend', function (e) {
            this.style.opacity = '1';
            draggedElement = null;
        });
    });

    dayColumns.forEach(column => {
        column.addEventListener('dragover', function (e) {
            e.preventDefault();
            this.style.backgroundColor = '#e0e7ff';
        });

        column.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = '#f8fafc';
        });

        column.addEventListener('drop', function (e) {
            e.preventDefault();
            this.style.backgroundColor = '#f8fafc';

            if (draggedElement) {
                const clone = draggedElement.cloneNode(true);
                clone.style.margin = '5px 0';
                clone.style.fontSize = '0.9rem';
                clone.addEventListener('click', function () {
                    this.remove();
                });
                this.appendChild(clone);
            }
        });
    });
});

// Quiz functionality
let selectedOption = null;

document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function () {
        // Remove previous selection
        document.querySelectorAll('.quiz-option').forEach(opt =>
            opt.classList.remove('selected'));

        // Select current option
        this.classList.add('selected');
        selectedOption = this.dataset.result;

        // Show submit button
        document.getElementById('quiz-submit').style.display = 'inline-block';
    });
});

function showQuizResult() {
    const results = {
        explorer: {
            title: "Tu es l'Explorateur! 🗺️",
            description: "Tu aimes découvrir de nouveaux endroits et relever des défis. Ta curiosité naturelle t'aidera à t'adapter rapidement au secondaire!"
        },
        social: {
            title: "Tu es le Connecteur! 🤝",
            description: "Tu valorises les relations humaines et tu es doué pour créer des liens. Tu vas sûrement devenir le cœur de ton groupe d'amis!"
        },
        studieux: {
            title: "Tu es l'Académique! 📖",
            description: "Tu prends tes études au sérieux et tu veux réussir. Ton dévouement et ta discipline te mèneront loin!"
        },
        aventurier: {
            title: "Tu es l'Aventurier! 🎭",
            description: "Tu cherches toujours de nouvelles expériences et tu n'as pas peur d'essayer de nouvelles choses. Le secondaire sera plein d'opportunités pour toi!"
        }
    };

    const result = results[selectedOption];

    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('quiz-result').innerHTML = `
                <div class="quiz-result">
                    <h2>${result.title}</h2>
                    <p>${result.description}</p>
                    <button class="big-button" onclick="resetQuiz()" style="margin-top: 20px;">
                        Refaire le quiz 🔄
                    </button>
                </div>
            `;
}

function resetQuiz() {
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';
    document.querySelectorAll('.quiz-option').forEach(opt =>
        opt.classList.remove('selected'));
    document.getElementById('quiz-submit').style.display = 'none';
    selectedOption = null;
}

// Add some fun interactions
document.addEventListener('DOMContentLoaded', function () {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.tip-card, .stress-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
