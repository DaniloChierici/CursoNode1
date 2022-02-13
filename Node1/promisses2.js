function funcionarOuNão(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNão('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
        
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))