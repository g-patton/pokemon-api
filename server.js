const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 8000

app.use(cors())

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

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (request, response)=>{
    const pokeName = request.params.name.toLowerCase();
    if ( pokemon[pokeName] ){
        response.json(pokemon[pokeName]);
    }else{
        response.json(pokemon['unknown']);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})