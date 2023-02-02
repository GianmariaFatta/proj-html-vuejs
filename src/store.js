import {reactive} from 'vue';
export const store= reactive({
    pages:['HOME','PAGES','PORTFOLIO','BLOG', 'SHOP', 'ELEMENTS'],

    cardsMain:[
        {img:"./src/assets/img/h-2-port-img-1.jpg",
        title:"All these illustrations",
        subtitle:"illustrations",},
        {img:"./src/assets/img/h-2-port-img-2.jpg",
title:"Type and illustrations",
        subtitle:"illustrations",},
        {img:"./src/assets/img/h-2-port-img-3.jpg",
        title:"Draw and illustrate",
        subtitle:"illustrations",},
        {img:"./src/assets/img/h-2-port-img-4.jpg",
        title:"Illustrations of novles",
        subtitle:"illustrations",       },
        {img:"./src/assets/img/h-2-port-img-5.jpg",
        title:"Too many illustrations",
        subtitle:"illustrations",},
        {img:"./src/assets/img/h-2-port-img-6.jpg",
        title:"Dreams are illustrations",
        subtitle:"illustrations",}],

    articles:[
        {
            cover:"./src/assets/img/h-2-blog-img-1.jpg",
            title:"This way, loves: a detailed guide through new design",
            author:"Emily Fields",
        },
        {
            cover:"./src/assets/img/h-2-blog-img-2.jpg",
            title:"I try to give people a different way of looking art",
            author:"Emily Fields"
        },
        {
            cover:"./src/assets/img/h-2-blog-img-3.jpg",
            title:"Introduce Richard Laperrière of those amazing features",
            author:"Emily Fields"
        }
    ]
})