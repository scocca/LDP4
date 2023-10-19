
function fibonacci(){
    const num1 = document.getElementById('calcular').value;
    let arr=[]
    let fib=1
    let ant=0
    let sum = 0
    arr.push(0,1)
    while(sum<=num1){
    sum=fib+ant;
    ant=fib
    fib=sum
    if (sum <= num1){
        arr.push(sum)
    }
    }

    document.getElementById('resultado').innerHTML= "La secuencia fibonacci es: " + arr;
}
