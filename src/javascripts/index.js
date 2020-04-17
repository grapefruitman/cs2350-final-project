// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import { images } from './gallery'

let featured_image = document.querySelector('.featured')

for(let i of images){
    let thumb = document.getElementById('i'+ i.id)
    thumb.innerHTML = `
        <img src = "${i.url}">
    `
    thumb.onclick = function(){
        selectImage(i)
    }
}



function selectImage(i){
    featured_image.innerHTML = `
        <img src="${i.url}" style = "float: left; ">
        <h1>${i.title}</h1>
        <p>${i.description}
    `
}






//At this point I tried adding the ability to write a review, but I don't understand the javascript enough to do that


// function displayCard(c){
//     return `
//     <div class="card" data-title="${c.title}">
//           <img src="${c.poster}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${c.title}</h5>
//             <p class="card-text">${c.description}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//             <button class="btn btn-danger">Delete</button>
//           </div>
    
    
//     `
// }

// function displayCards(){
//     let cards = JSON.parse(localStorage.getItem('cards') || '[]')
//     document.querySelector('#cards').innerHTML = ''
//     for (let c of cards){
//         let col = document.createElement('div')
//         col.setAttribute('class', 'col-md-4')
//         col.innerHTML = displayCard(c)
//         document.querySelector('#cards').appendChild(col)
//     }

//     document.querySelectorAll('button.btn-danger').forEach(function(b){
//         b.onclick = function(event){
//             let cards = JSON.parse(localStorage.getItem('cards') || '[]')
//             let ndx = -1
//             for(let i in cards){
//                 if(cards[i].title === event.target.closest('.card').dataset.title){
//                     ndx = i
//                     break
//                 }
//             }

//             if (ndx != -1){
//                 cards.splice(ndx, 1)
//                 localStorage.setItem('cards', JSON.stringify(cards))
//                 location.reload()
//             }
//         }
//     })
// }

// function addNewCard(event){
//     if(event) event.preventDefault()

//     let t = document.querySelector('#title').value
//     let d = document.querySelector('#description').value
//     // let p = document.querySelector('#poster').value

//     let cards = JSON.parse(localStorage.getItem('cards') || '[]')

//     if(t && d && p){
//         let card = {title: t, description: d,}
//         cards.push(card)
//         localStorage.setItem('cards', JSON.stringify(cards))
//     }

//     this.reset()

//     document.querySelector('#myForm').classList.add('d-none')
//     document.querySelector('#cards').classList.remove('d-none')

//     displayCards()
// }

// document.querySelector('#new_card').onclick = function(){
//     document.querySelector('#myForm').classList.remove('d-none')
//     document.querySelector('#cards').classList.add('d-none')
// }

// document.forms[0].querySelector('[type="button"]').onclick = function(){
//     document.querySelector('#cards').classList.remove('d-none')
//     document.querySelector('#myForm').classList.add('d-none')
// }

// document.forms[0].addEventListener('submit', addNewCard, false)

// displayCards()