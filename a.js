const myModal = document.getElementById('myModal')

myModal.addEventListener('show.bs.modal', event => {
  if (!data) {
    return event.preventDefault() // stops modal from being shown
  }
})