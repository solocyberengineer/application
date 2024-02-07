console.log('subtraction')

exports.sub = (...args) => {
    main_num = args[0];
    args.splice(0,1);
    return main_num - args.reduce((a,b)=>{ return a+b }, 0);
}