fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(photo => reload(photo))

let arr = []

let photoBox = document.querySelector('.photo-box')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('.modal img')
let modalTitle = document.querySelector('.modal h2')
let closeModal = document.querySelector('.close')

function reload(arr) {
  for (const item of arr) {
    let photoItem = document.createElement('img')

    photoItem.classList.add('img')

    photoItem.src = item.thumbnailUrl
  
    photoBox.append(photoItem)

    photoItem.onclick = () => {
      setTimeout(() => {
        modal.style.opacity = '1'
      }, 400);
      modal.style.display = 'flex'
      modalImg.src = item.url
      modalTitle.innerHTML = item.title
    }

    closeModal.onclick = () => {
      setTimeout(() => {
        modal.style.display = 'none'
      }, 500);
      modal.style.opacity = '0'
    }
  }
}