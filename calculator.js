var 
h1 = document.querySelector('#text-write')
h1.innerText = "";
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')
var zero = document.querySelector('#zero')

var plus = document.querySelector('#plus')
var minus = document.querySelector('#minus')
var multi = document.querySelector('#multi')
var devide = document.querySelector('#divide')
var equal = document.querySelector('#equal')
var clr = document.querySelector('#clr')

clickEvent(one)
clickEvent(two)
clickEvent(three)
clickEvent(four)
clickEvent(five)
clickEvent(six)
clickEvent(seven)
clickEvent(eight)
clickEvent(nine)
clickEvent(zero)
clickEvent(plus)
clickEvent(minus)
clickEvent(multi)
clickEvent(devide)


var ans = "";
function clickEvent(attribute){
    attribute.addEventListener('click',(event)=>{
        var value = attribute.value
       ans+=value
       console.log(ans)
        h1.innerText +=value
    })
}
equal.addEventListener('click',(event)=>{
    const val = eval(ans)
    console.log(ans)
    h1.innerText = val
    ans = val;
})
clr.addEventListener('click',(e)=>{
    h1.innerText = "";
    ans = "";
})

var body = document.querySelector('.body')
var mode = document.querySelector('.mode')
var vals = 1;
mode.addEventListener('click',(event)=>{
    body.classList.toggle('body')
    if(vals){
        mode.innerText = "Dark Mode"
       vals = 0
    }else{
        mode.innerText = "Light Mode"
        vals = 1;
    }
})
var  closes = document.querySelector('.close');
closes.addEventListener('click',(e)=>{
         window.close()
})