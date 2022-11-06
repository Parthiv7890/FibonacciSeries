const num = document.getElementById('num')
const btn = document.getElementById('btn')
const dis = document.getElementById("demo")
const noofelements = document.getElementById('noofelements')

const FibSeries = (maxNum)=>{
    if(num.value<=0){
        alert("Please enter a Natural Number")
    }else{
        let lastNum = 1
        let secondLastNum = 0
        if(maxNum){
            if(num.value==1){
                dis.innerHTML = "0"
            }
            if(num.value == 2){
                dis.innerHTML = "0,1"
            }
            if((num.value!=1)&&(num.value!=2)){
                dis.innerHTML = "0,1,"
                for(i=0;i<maxNum-2;i++){
                    currentNum = lastNum+secondLastNum
                    secondLastNum = lastNum
                    lastNum = currentNum
                    if(i+1==maxNum-2){
                        dis.innerHTML = dis.innerHTML + currentNum
                    }else{
                        dis.innerHTML = dis.innerHTML + currentNum + ','
                    }
                }
            }
        }
    }
}

btn.addEventListener('click',()=>{
    FibSeries(num.value)
})
document.getElementById('reset').addEventListener('click',()=>{
    dis.innerHTML = ' '
    num.value= ' '
})
num.addEventListener('change',()=>{
    noofelements.innerHTML ="Type a number to see "+num.value+ " number of elements in Fibonacci Series" 
    btn.innerText = "Click to see "+ num.value+ " elemnts"
})