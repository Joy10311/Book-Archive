const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data 
    searchField.value = '';
    const url = ` http://openlibrary.org/search.json?q=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displySearchResult(data.docs))
}

const displySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(doc => {
        console.log(doc)
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