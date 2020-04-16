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