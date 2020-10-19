function stringFunction(){
    console.log('hello from typescript')
    
}
function cal(val1:number,val2:number): number {
    let total : number = val1 + val2
    return total
}

cal(2,3)
let universal = cal
console.log(universal)
