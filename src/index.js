const init = () => {
  let inputForm = document.querySelector('form')
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = document.getElementById('searchByID')
    //console.log(e.target.searchByID.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(json => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.textContent = json.title 
        summary.textContent = json.summary 
    })
  })
}

document.addEventListener('DOMContentLoaded', init);