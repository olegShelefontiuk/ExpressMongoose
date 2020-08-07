import React from 'react'

let fruits =[
    {id:1, title: 'Яблука', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
    {id:2, title: 'Апельсини', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
    {id:3, title: 'Манго', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'}
]

export const ShopPage = () => {
const toHtml = fruit => `
<div class="card" ">
<h5 class="card-title">${fruit.title}</h5>
  <img class="card-img-top" src="${fruit.img}" alt="/">
  <div class="card-body">
    
    <a href="#1" class="btn1" data-btn="price" data-id="${fruit.id}"> Дивитись ціну </a>
    <a href="#" class="btn2" data-btn="delete" data-id="${fruit.id}"> Видалити </a>
  </div>
</div>

`


function render () {
   const dd = fruits.map(toHtml).join('')
return { __html: dd}


}


        return (
        <div className="row">
            <div className="col" id="fruits"
            dangerouslySetInnerHTML={render()}
            >

            </div>
            </div>


)

}