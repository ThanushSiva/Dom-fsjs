function search(search) {
    document.querySelector("#hp-search-input").value = search;
    document.querySelector("#hp-search-form").submit();
}

search("css selectors");