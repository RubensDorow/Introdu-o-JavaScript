function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade`;
}

    const pessoa1 = {
        nome: 'Rubens',
        idade: 34,
    }

    const pessoa2 = {
        nome: 'liege',
        idade: 29,
    }

    const pessoa3 = {
        nome: 'Thomas',
        idade: 9,
    }

    const pessoa4 = {
        nome: 'Loren',
        idade: 7,
    }

    const pessoa5 = {
        nome: 'Henry',
        idade: 1,
    }

    console.log (calculaIdade.call()) //não esquecer de defirnir a pessoa e o numero de anos