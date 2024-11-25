document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtém os valores dos campos de entrada
    const currentYear = parseInt(document.getElementById('currentYear').value);
    const birthYear = parseInt(document.getElementById('birthYear').value);
    
    if (!isNaN(currentYear) && !isNaN(birthYear) && currentYear >= birthYear) {
        // Calcula a idade
        const age = currentYear - birthYear;
        
        // Determina se é maior ou menor de 18 anos
        let ageStatus = age >= 18 ? 'maior de 18 anos' : 'menor de 18 anos';
        
        // Atualiza o texto do resultado
        document.getElementById('result').textContent = `Você tem ${age} anos e é ${ageStatus}.`;
    } else {
        // Se algum dos campos estiver vazio ou inválido
        document.getElementById('result').textContent = 'Por favor, preencha todos os campos corretamente e certifique-se de que o ano atual é maior ou igual ao ano de nascimento.';
    }
});