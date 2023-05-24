const express = require('express')
const app = express()
const port = 3000

const path = require ('path')
const x = path.join(__dirname , "../public")
app.use(express.static(x))

// hbs
app.set('view engine', 'hbs');
const viewsDirectory = path.join(__dirname , "../temp1/views")
app.set("views" , viewsDirectory)
//////////////////////////////////////////////////////////////////////
var hbs = require ('hbs')
const partialsPath = path.join(__dirname , "../temp1/partials")
hbs .registerPartials(partialsPath)
///////////////////////////////////////////////////////////////////////
app.get( '/' , (req , res) => {
    res.render('index' , {
        title: "HOME",
        desc: "this is Home page .. click here"
    })
})

app.get( '/service' , (req , res) => {
    res.render('service' , {
        title: "service",
        name: "Fatma Ashraf",
        city: "Mansoura",
        age: 18,
        img1: "images/1.jpg"
    })
})

app.get( '/team' , (req , res) => {
    res.render('team' , {
        title: "team",
        name: "mariam",
        city: "Mansoura",
        age: 14,
        img1: "images/46.jpg"
    })
})

app.get('/products' , (req , res)=>{
    console.log(req.query)
    res.send({
        product: "bmw 520 i"
    })
})
/////////////////////////////////////////////////////////////////////////////
const geocode = require('./tools/geocode')
const forecast = require('./tools/forecast')

app.get('/weather' , (req , res)=>{
    if(!req.query.address){
        return res.send({
            error: "you must enter an address"
        })
    }
    geocode(req.query.address, (error, data)=>{
        if(error){
            return res.send({error})
        }
    
    forecast(data.longtitude, data.latitude, (error, forecast)=>{
        if(error){
            return res.send({error})
        }else()=>{ 
            (undefined , {
               longtitude : response.body.features[0].center[0],
               latitude : response.body.features[0].center[1]
          })
       }
    res.send
    (
        {
            forecast: forecast,
            location: req.query.address,             
            geocode: ('longtitude = ' + data.longtitude + ' And latitude = ' + data.latitude)             
        }
    )            
})
})
})
//////////////////////////////////////////////////////////////////////////////////
app.get('*' , (req , res)=> {
    res.send('404 page not found')
})
app.listen(port , () => {
    console.log("Everything ok")
})