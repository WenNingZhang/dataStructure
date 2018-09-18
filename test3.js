var arr = []
while(arr.length < 8){
    var randomnumber = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr.push(randomnumber)
}


console.log(arr)
