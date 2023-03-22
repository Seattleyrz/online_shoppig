//implement product search
let keyword = document.querySelector('.keyword');
let searchHelper = document.querySelector('.search-helper');

//define list to search contents
let searchArr = ['iPhone13', 'iPhone14', 'iPhoneXS', 'Xiaomi', 'Huawei Phone', 'Samsung', 'Oppo', 'Vivo', 'Motorola']

//change event of contents in input box
keyword.oninput = function(){
    searchHelper.innerHTML = '';
    for(let i = 0; i < searchArr.length; i++){
        if(searchArr[i].indexOf(keyword.value) != -1){
            searchHelper.innerHTML += '<p>'+searchArr[i]+'</p>';
            searchHelper.style.display = 'block';

        }
    }
}

keyword.onblur = function(){
    searchHelper.style.display = 'none '
}


//carousel change
let carouselImg = document.querySelector('.carousel-img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.slider');
let lis = document.querySelectorAll('.banner-btn li')

let carouselImgArr = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg'];

let count = 0;

//function: to change the carousel image path
function changeImg(){
    carouselImg.src = './images/' + carouselImgArr[count];

    for(let i = 0; i < lis.length; i++){
        if(i != count){
            lis[i].className = '';
        }
    }
    lis[count].className = 'active';
    
}

let timer = setInterval(function(){
    
    count++;
    if(count > carouselImgArr.length - 1){
        count = 0;
    }
    changeImg();
    
}, 2000);


//click next button
next.onclick = function(){
    count++;
    if(count > carouselImgArr.length - 1){
        count = 0;
    }
    changeImg();
}

//click previous button
prev.onclick = function(){
    count++;
    if(count < 0){
        count = carouselImgArr.length - 1;
    }
    changeImg();
}

//when mouse over, stop counter of changing img
slider.onmouseover = function(){
    clearInterval(timer);
}

//when mouse out, start counter of changing img
slider.onmouseout = function(){
    timer = setInterval(function(){
    
        count++;
        if(count > carouselImgArr.length - 1){
            count = 0;
        }
        changeImg();
        
    }, 3000);
}

//set onclick event on li
for(let i = 0; i < lis.length; i++){
    lis[i].onclick = () => {
        count = i;
        changeImg();
    }
}

let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let elevator = document.querySelector('.elevator');

//implement elevator scroll highlight

let items = document.querySelectorAll('.content .item')
let as = document.querySelectorAll('.content a')
let search = document.querySelector('.search-bar');
let searchM = document.querySelector('.search-m');
let form = document.querySelector('.form');

let searchLogo = document.querySelector('.search_logo');

let itemArr = [];

let base = header.offsetHeight + banner.offsetHeight;

for(let i = 0; i < items.length; i++){
    base = base + items[i].offsetHeight;
    itemArr.push(base);
}

function clearColor(){
    for(let i = 0; i < as.length; i++){
        as[i].style.color = '';
    }
}

//set elevator change
document.onscroll = function(){
    //the length of scrolling toward top
    let top = document.documentElement.scrollTop||document.body.scrollTop;

    //get header height
    let headerHeight = header.offsetHeight; //includes height, padding, border
    let bannerHeight = banner.offsetHeight;

    if(top >= headerHeight + bannerHeight - 20){
        elevator.className = 'elevator elevator-fix';
        search.className = 'search-bar search-fix';
        searchM.style.height = '50px';
        form.style.top = '8px';
        searchLogo.style.display = 'block';
    } else{
        elevator.className = 'elevator';
        search.className = 'search-bar';
        searchM.style.height = '60px';
        form.style.top = '25px';
        searchLogo.style.display = 'none';
    }
    if(top < header.offsetHeight + banner.offsetHeight){
        clearColor();
    } else if(top >= header.offsetHeight + banner.offsetHeight && top < itemArr[0]){
        clearColor();
        as[0].style.color = 'red';
    } else if(top >= itemArr[0] && top < itemArr[1]){
        clearColor();
        as[1].style.color = 'red';
    } else if(top >= itemArr[1] && top < itemArr[2]){
        clearColor();
        as[2].style.color = 'red';
    } else if(top >= itemArr[2]){
        clearColor();
        as[3].style.color = 'red';
    }
}