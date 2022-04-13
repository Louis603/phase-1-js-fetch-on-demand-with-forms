const init = () => {
  const form = document.querySelector('form')
  
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = e.target.searchByID.value
      //const inputForm = document.querySelector('input#searchByID');
        // console.log(input)

        fetch(`http://localhost:3000/movies/${input}`)
        .then(res => res.json())
        .then(data => {
            const newTitle = document.createElement('h4')
            const newSummary = document.createElement(('p'))
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            newTitle.textContent = data.title;
            newSummary.textContent = data.summary;

            title.append(newTitle)
            summary.append(newSummary)

                  
            
        })
        
    })
}

document.addEventListener('DOMContentLoaded', init);
// console.log(e.target.searchByID.value)
// console.log(document.querySelector('input#searchByID'))