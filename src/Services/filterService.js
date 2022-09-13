function filterBySearch(data, searchTerm) {
    if (searchTerm.trim() == "") {
        return data;
    } else {
        return data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }
}

function filterByGenres(data, filterTerm) {
    if (filterTerm == 'All') {
        return data;
    } else if(filterTerm == ''){
        return data;
    }else {
        return data.filter(item => item.genres.some(item => item.name == filterTerm))
    }
}

export {filterBySearch,filterByGenres}