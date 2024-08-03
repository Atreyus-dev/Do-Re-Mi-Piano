document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        
        if (faqItem.classList.contains('open')) {
            faqItem.classList.remove('open');
            answer.style.display = 'none';
        } else {
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
                item.querySelector('.faq-answer').style.display = 'none';
            });
            faqItem.classList.add('open');
            answer.style.display = 'block';
        }
    });
});