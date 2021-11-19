const calcular = document.getElementById('calcular');


function investimento () {
    const valor = document.getElementById('valor').value;
    const taxa = document.getElementById('taxa').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if ( valor !== '' && taxa !== '' && tempo !== '') {
       const taxaFinal= taxa/100;
       VF = valor*(((1+taxaFinal)*tempo)-1/taxaFinal)


        resultado.textContent = `Olá, com um investimneot de ${valor} mensalmete com uma taxa de ${taxa} por ${tempo}, você tera no final o total de ${VF} `;

    }else {
        resultado.textContent = 'Para calcular o seu investimento , preencha todos os campos.';
    }

}
calcular.addEventListener('click', investimento);
