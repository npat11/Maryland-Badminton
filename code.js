//Click on logo, return to home page
function logoHome() {
    window.location.href = 'index.html';
}

//FAQ open and close functionality for different questions
document.addEventListener('DOMContentLoaded', function() {
    const questionButtons = document.querySelectorAll('.question');

    questionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = button.nextElementSibling;
            const isActive = answer.classList.contains('active');

            questionButtons.forEach(btn => {
                const ans = btn.nextElementSibling;

                //closing question that is opened if another question is clicked on
                if (btn !== button && ans.classList.contains('active')) {
                    ans.classList.remove('active');
                    btn.classList.remove('active');
                }
            });

            //open question clicked on
            answer.classList.toggle('active');
            button.classList.toggle('active');
        });
    });
});
