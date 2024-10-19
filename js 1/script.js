// datatype

// var - old js
// let - es-6
// const - es-6

// console.log('hello')

// var a = 6;
// let c = 10;
// const b = 10;

//  b = 15;

// console.log(b)

// selectors

// class - .classname
// id - #id
// tag - tag name


// js selectors

// class , id , tag 

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

// document.querySelector('.classname')
// document.querySelector('#idname')
// document.querySelector('tagname')


// var heading = document.querySelector('#heading');

// heading.innerHTML = "<i>abc</i>"
// heading.textContent = 'hello 2'

// console.log(heading)


// array

// var num = [4,5,6,7]
// var name = ["anish", "anshu", "abhishek", "shailesh"]

// var abc = [1,2,3,"abc", "pqr", function abc(){console.log('hello')}]

// console.log(num)
// console.log(name)
// console.log(abc)

// foreach
// for of

// var heading = document.querySelector('#heading')



// var abc = ["anish", "anshu", "abhishek", "shailesh"]

// console.log(abc[2])


// function click(){
//     console.log('Click ho gya')
// }

// var btn = document.getElementById('clickme')

// btn.addEventListener('click', ()=>{
//     btn.innerHTML = 'Hello'
//     btn.style.color = 'red'
//     btn.style.backgroundColor = 'black'
// })


// var box = document.querySelector('.box')
// var hide = document.querySelector('#hide')
// var show = document.querySelector('#show')

// hide.addEventListener('click', ()=>{
//     // console.log('hide click')
//     box.style.display = 'none'
// })

// show.addEventListener('click', ()=>{
//     // console.log('hide click')
//     box.style.display = 'block'
// })


var toggle = document.querySelector('.toggle')
var box = document.querySelector('.box')
var check = 0;

toggle.addEventListener('click', ()=>{
    if(check == 0){
        box.style.display = 'none'
        toggle.innerHTML = 'Show'
        toggle.style.backgroundColor = 'blue'
        check = 1;
    }else{
        box.style.display = 'block'
        toggle.innerHTML = 'Hide'
        toggle.style.backgroundColor = 'red'
        check = 0;
    }
})