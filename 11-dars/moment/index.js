let date = new Date();

const week =  [
    'Sunday',
    'Monday',
    'Thuseday', 
    'Wednesday',
    'Thrithday',
    'Friday',
    'Saturday',
]
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
let x = date.getDate();
x = x.toString()
let y , z;
x.length == 2 ? y = x[1] : y = x[0];
switch (y) {
    case 1:
        z = 'st'
        break;
    case 2 :
        z = 'nd'
        break;
    case 3 :
        z = 'rd'
        break;
    default:
        z = 'th'
        break;
}
document.getElementById('first').innerHTML = `// ${months[date.getMonth()]} ${date.getDate()}${z} ${date.getFullYear()}`
let h = date.getHours();
let h1 = date.getHours();
let hour = document.getElementById('hour')
let hour1 = document.getElementById('hour1')
let m = date.getMinutes();
let minute = document.getElementById('minute')
let minute1 = document.getElementById('minute1')
let s = date.getSeconds();
let second = document.getElementById('second')
let second1 = document.getElementById('second1')
let b;
if(h > 12) {
    h = h -12;
    b = 'pm'
} else b = 'am'
setInterval(() => {
    s.toString().length === 1 ? second.innerHTML = `:0${s} ${b}`:second.innerHTML = `:${s} ${b}`;
    s.toString().length === 1 ? second1.innerHTML = `:0${s}+05:00`:second1.innerHTML = `:${s}+05:00`;
    s++
    m.toString().length === 1 ? minute.innerHTML = `:0${m}`:minute.innerHTML = `:${m}`;
    m.toString().length === 1 ? minute1.innerHTML = `:0${m}`:minute1.innerHTML = `:${m}`;
    hour.innerHTML =`.  ${h}`
    hour1.innerHTML =`${h1}`
    if (s === 60) {
        s = 0;
        if(s == 0) {
            m++;
            if(m == 60) {
                h++
                h1++
            };
        }
    }
}, 1000);

document.getElementById('day').innerHTML = `// ${week[date.getDay()]}`;
document.getElementById('mdy').innerHTML = `// ${months[date.getMonth()]} ${date.getDate()}${z} ${date.getFullYear().toString().slice(2)}`
document.getElementById('year').innerHTML = `// ${date.getFullYear()} escaped ${date.getFullYear()}`
let c;
date.getMonth().toString.length === 1 ? c = `0${date.getMonth()+1}` : c = date.getMonth()+1;
document.getElementById('last').innerHTML = `// ${date.getFullYear()}-${c}-${date.getDate()}T`



let countSec = date.getSeconds();
let countMin = date.getMinutes();
let countMonth = date.getMonth() + 1;
let spans = document.getElementById('s');
let moment = (p) => {
    switch (p) {
        case 'lang':
            const lang = document.createElement('div');
            lang.innerHTML = `// en`;
            spans.appendChild(lang);
            break;
        case 'LT' :
            const LT = document.createElement('div');
            setInterval(() => {
                countSec++;
                countMin.toString().length === 1 ? LT.innerHTML = `// ${h}:0${countMin} ${b}`:LT.innerHTML = `// ${h}:${countMin} ${b}`;
                if(countSec === 60){
                    countMin++;
                    countSec = 0;
                }
            }, 1000);
            spans.appendChild(LT);
            break;
        case 'LTS' :
            const LTS = document.createElement('div');
            setInterval(() => {
                countMin.toString().length === 1 ? LTS.innerHTML = `// ${h}:0${countMin}:0${countSec} ${b}`:LTS.innerHTML = `// ${h}:${countMin}:${countSec} ${b}`;
                if(countSec === 60){
                    countMin++;
                    countSec = 0;   
                }
            }, 1000);
            spans.appendChild(LTS);
            break;
        case 'L' :
            const L = document.createElement('div');
            countMonth.toString().length === 1 ? countMonth = `0${countMonth}` : countMonth = countMonth;
            L.innerHTML = `// ${countMonth}/${date.getDate()}/${date.getFullYear()}`
            spans.appendChild(L)
            break;
        case 'l' :
            const l = document.createElement('div');
            l.innerHTML = `// ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
            spans.appendChild(l)
            break;
        case 'LL' :
            const LL = document.createElement('div')
            LL.innerHTML = `// ${months[date.getMonth()]} ${date.getDate(``)}, ${date.getFullYear()}`
            spans.appendChild(LL)
            break;
        case 'll' :
            const ll = document.createElement('div')
            ll.innerHTML = `// ${months[date.getMonth()].slice(0 ,3)} ${date.getDate(``)}, ${date.getFullYear()}`
            spans.appendChild(ll)
            break;
        case 'LLL' :
            const LLL = document.createElement('div');
            m.toString().length === 1 ? m = `0${m}` : m = m
            LLL.innerHTML = `// ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${h}:${m} ${b}`
            spans.appendChild(LLL)
            break;
        case 'lll' :
            const lll = document.createElement('div');
            m.toString().length === 1 ? m = `0${m}` : m = m
            lll.innerHTML = `// ${months[date.getMonth()].slice(0 , 3)} ${date.getDate()}, ${date.getFullYear()} ${h}:${m} ${b}`
            spans.appendChild(lll)
            break;
        case 'LLLL' :
            const LLLL = document.createElement('div');
            m.toString().length === 1 ? m = `0${m}` : m = m
            LLLL.innerHTML = `// ${week[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${h}:${m} ${b}`
            spans.appendChild(LLLL)
            break;
        case 'llll' :
            const llll = document.createElement('div');
            m.toString().length === 1 ? m = `0${m}` : m = m
            llll.innerHTML = `// ${week[date.getDay()].slice(0 , 3)} ${months[date.getMonth()].slice(0 , 3)} ${date.getDate()}, ${date.getFullYear()} ${h}:${m} ${b}`
            spans.appendChild(llll)
            break;
        default:
            alert('Error 404')
            break;
    }
}

moment('lang');
moment('LT');
moment('LTS');
moment('L');
moment('l');
moment('LL');
moment('ll');
moment('LLL');
moment('lll');
moment('LLLL');
moment('llll');
