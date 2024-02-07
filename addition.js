console.log('addition')

function add(...args){
    return args.reduce((a,b)=>{ return a+b },0)
}

module.exports = {
    add
}