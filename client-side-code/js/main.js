document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const pokeName = document.querySelector('input').value
    try{
        const response = await fetch(`https://pokemon-api-gp.herokuapp.com/api/${pokeName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('name').innerText = data.name
        document.getElementById('no.').innerText = data['No.']
       


    }catch(error){
        console.log(error)
    }
}