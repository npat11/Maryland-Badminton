function logoHome() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const questionButtons = document.querySelectorAll('.question');

    questionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = button.nextElementSibling;
            const isActive = answer.classList.contains('active');

            questionButtons.forEach(btn => {
                const ans = btn.nextElementSibling;
                if (btn !== button && ans.classList.contains('active')) {
                    ans.classList.remove('active');
                    btn.classList.remove('active');
                }
            });

            answer.classList.toggle('active');
            button.classList.toggle('active');
        });
    });
});


