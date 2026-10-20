const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let expression = '';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.key;

        if (key === 'C') {
            expression = '';
        } else if (key === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Erro';
            }
        } else {
            expression += key;
        }
        
        display.value = expression;
    });  

});

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Alterna o ícone entre lua e sol
    toggleBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});