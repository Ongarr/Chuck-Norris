const url = 'https://api.chucknorris.io/jokes/'


const getJokes = async (query) => {

    const baseUrl = url + `${query}`;

    const response = await fetch(baseUrl);
    const data = await response.json();

    return data;
}

const getJokesFromCategory = async (query) => {

    const baseUrl = url + 'random?category=' + `${query}` ;

    const response = await fetch(baseUrl);
    const data = await response.json();

    return data;
}
