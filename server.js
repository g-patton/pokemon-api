const express = require('express')
const app = express();
const PORT = 8000

const pokemon = {
    'bulbasaur': {
        'No.': 1,
        'name': 'bulbasaur',
        'type': ['grass', 'poison'],
        'abilities': ['overgrow','chlorophyll'],
    },
    'charmander': {
        'No.': 4,
        'name': 'charmander',
        'type': ['fire'],
        'abilities': ['blaze','solar power'],
    },
    'squirtle': {
        'No.': 7,
        'name': 'squirtle',
        'type': ['water'],
        'abilities': ['torrent','rain dish'],
    },
    'caterpie': {
        'No.': 10,
        'name': 'caterpie',
        'type': ['bug'],
        'abilities': ['shield dust','run away'],
    },
    'unknown': {
        'No.': [],
        'name': 'unknown pokemon',
        'type': [],
        'abilities': [],
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response)=>{
    const pokeName = request.params.name.toLowerCase();
    if ( pokemon[pokeName] ){
        response.json(pokemon[pokeName]);
    }else{
        response.json(pokemon['unknown']);
    }
});

app.listen(PORT, ()=>{
    console.log(`the server is running on port ${PORT}.
    Better go catch it!`);
});