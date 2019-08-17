const calcular = (tipo, valor) => {
    if (tipo === 'acao') {

        if (valor === 'c') {
            // Limpa o visor
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }
        if (valor === '=') {

            // eval pré-processa a operação, tornando-a um Number

            let valor_campo = eval(document.getElementById('resultado').value)

            document.getElementById('resultado').value = valor_campo

        }
    }
    else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}