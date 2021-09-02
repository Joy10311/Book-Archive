document.getElementById('error-message').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data 
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';

    if (searchText === '') {

    }

    else {
        // load data 
        const url = ` https://openlibrary.org/search.json?q=${searchText}`

        fetch(url)
            .then(res => res.json())
            .then(data => displySearchResult(data.docs))
            .catch(error => displayError(error));
    }

}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}


const displySearchResult = docs => {
    const result = document.getElementById('result');
    result.innerText = docs.length;

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if (docs.length === 0) {
        displayError()
        console.log('eroor2')
    }

    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top " alt="...">
        <div class="card-body">
          <h5 class="card-title">${doc.title}</h5>
          <p class="card-text">Author: ${doc.author_name}</p>
          <p class="card-text">First publish date: ${doc.first_publish_year}</p>
        </div>
      </div>
        `;

        searchResult.appendChild(div);


    })



}

