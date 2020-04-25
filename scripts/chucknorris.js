const url = 'https://api.chucknorris.io/jokes/'




class Joke{
    constructor(){
        this.url = 'https://api.chucknorris.io/jokes/';
    }
    async getJokes(query){
        const baseUrl = this.url + `${query}`;

        const response = await fetch(baseUrl);
        const data = await response.json();

    return data;
    }
    async getJokesFromCategory (query){

        const baseUrl = this.url + 'random?category=' + `${query}` ;
    
        const response = await fetch(baseUrl);
        const data = await response.json();
    
        return data;
    }
} 