let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    weatherFunction()
    form.reset()
})

const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const geocodeF = document.getElementById('geocode')

let weatherFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            forecastF.innerText =""
            geocodeF.innerText =""
        }
        else{
            setInterval(()=> { locationF.innerText = data.location},1000)
            setInterval(()=> { forecastF.innerText = data.forecast},2000)
            setInterval(()=> { geocodeF.innerText= data.geocode},3000)
            errorF.innerText =""
        }
    }
    catch(e){
        console.log(e)
    }
}