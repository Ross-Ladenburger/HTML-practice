
document.getElementById('MEOW').addEventListener('click', getTheData)

apiURL = 'https://api.thecatapi.com/v1/images/search?format=json'

function getTheData() {
    console.log('This button was pressed... here is your data')
    
    fetch(apiURL)  
        .then(function (response) { 
            // console.log(response.json());
            return (response.json());
        })
        .then(function(data){
            console.log(data)
            //bike = `${data.incidents[0].id}`
            //console.log(bike)
            //document.getElementById('incident').innerHTML = bike
            data.breeds 
            console.log(data[0].url)
            var cat = data[0].url 
            //document.getElementById('catfact').innerHTML = catfact

            document.getElementById('catfact').src = cat;
        })
}