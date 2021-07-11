export const letterSpacing=(s)=>{
if(s){
    let str=s.toString()

    let newStr = []
    let count = 0
    for(let i=str.length-1;i>=0;i--){
        newStr.push(str[i])
        if((count===2)||(count===5)||(count===8)){
            newStr.push(' ')
        }
        count++
    }
    newStr=newStr.reverse()
    newStr=newStr.join('')
    return newStr
}
return "-"
}