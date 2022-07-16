const alunos = [
    {
        nome: 'Rubens',
        nota: 5,
        turma: '1B',
    },

    {
        nome: 'Thomas',
        nota: 9,
        turma: '1B',
    },

    {
        nome: 'kauan',
        nota: 6,
        turma: '2C',
    },

    {
        nome: 'Paquito',
        nota: 3,
        turma: '2C',
    }
];

function alunosAprovados(array, media) {
    let aprovados = [];
    for(i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if(nota >=media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log (alunosAprovados(alunos, 5))