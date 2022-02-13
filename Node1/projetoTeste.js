//middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor2= 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2= 'mid2'
    next()
}
const passo3 = (ctx, next) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.lenght && middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso
}
const ctx = {}
exec(ctx, passo2, passo3)
console.log(ctx)