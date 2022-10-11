let input = document.getElementById('input')
let fnum;
let sum;
let snum;
let off;
let sta;
let exp;
let perc;
let inn;
let all;
let subtr;

function btn(val){
    input.value += val
}
function operator(add){
sum = add
fnum = input.value
input.value = ''
}
function sub(minus){
    subtr = minus
    fnum = input.value
    input.value = ''
}
function times(mult){
sta = mult
fnum = input.value
input.value = ''
}
function divide(slash){
off = slash
fnum = input.value
input.value = ''
}

function raise(ex){
exp = ex
fnum = input.value
input.value = ''
}
function per(per){
perc = per
fnum = input.value
input.value = ''
}
function sin(i){
inn = i
console.log('hey!')
}
function cos(os){
all = os
console.log('hey!')
}
function tan(t){
tt = t
console.log('hey!')
}

function equal(params){
    snum = input.value
    if(sum == '+'){
        input.value = Number(fnum) + Number(snum)
    } else if(subtr == '-'){
        input.value = Number(fnum) - Number(snum)

    } else if(sta == '*'){
        input.value = Number(fnum) * Number(snum)
    } else if(off == '/'){
        input.value = Number(fnum) / Number(snum)

    } else if(exp == '**'){
        input.value = Number(fnum) ** Number(snum)

    } else if(perc == '%'){
        input.value = Number(fnum) % Number(snum)

    } else if(inn == 'sin'){
        input.value = Number(Math.sin(input.value * Math.PI/180))
    } else if(all == 'cos'){
        input.value = Number(Math.cos(input.value * Math.PI/180))
    } else if(tt == 'tan'){
        input.value = Number(Math.tan(input.value * Math.PI/180))
    }
}

function del(params){
    input.value = input.value.slice(0, -1)
}
function clr(params){
    input.value = ''
    input.value = input.value

}