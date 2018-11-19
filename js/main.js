let book = document.getElementById('book-list')

for (let i = 0; i <= books.length; i++) {
    let book1 = document.createElement('div')
    book1.className = 'eachbook'
    book.appendChild(book1)
    let book10 = document.createElement('div')
    book10.className = 'number'
    book10.innerHTML = books[i].rank
    book1.appendChild(book10)
    let book11 = document.createElement('div')
    book11.className = 'name'
    book11.innerHTML = books[i].name
    book1.appendChild(book11)
    let cover = document.createElement('img')
    book11.appendChild(cover)
    cover.className='img'
    if (i == 0){
        cover.src='png/cz.jpg'
    } else if (i == 1) {
        cover.src='png/xd.png'
    } else if (i == 2) {
        cover.src='png/js.png'
    } else if (i == 3) {
        cover.src='png/mf.png'
    } else {
        cover.src='png/cx.png'
    }
    let book12 = document.createElement('div')
    book12.className = 'author'
    book12.innerHTML = books[i].author
    book1.appendChild(book12)
}

















// let cover = document.createElement('img')
// book11.appendChild(cover)
// cover.className='img'
// if (i == 0){
//     // let cover = document.createElement('img')
//     // book1.appendChild(cover)
//     cover.src='png/cz.jpg'
//     // cover.className='img'
// } else if (i == 1) {
//     cover.src='png/xd.png'
// } else if (i == 2) {
//     cover.src='png/js.png'
// } else if (i == 3) {
//     cover.src='png/mf.png'
// }