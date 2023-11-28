const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const PORT = 3000;

app.use(bodyparser.urlencoded({extended:true}))
cities = {
    'durgapur': {
        climate:"Sunny",
        temp:Math.floor(Math.random() * (35 - 10 + 1)) + 10
    }
}
function getweat(req,res,next){
    //req.body['city']

    const {city, name} = req.body;
    console.log(city);
    next();
}


app.use(getweat);

app.get('/', (req,res)=>{
    res.send(`
    <form action="/check" method="POST">
    <input name = "name">
        <input type="text" placeholder="ENter city name:" name="city" id="city">
        <button type="submit">Submit</button>
    </form>
    `);
})
app.post('/',(req,res)=>{
    if(cities.hasOwnProperty(req.body['city'])){
    res.send(req.body['city']+JSON.stringify(cities[req.body['city']]))
    }
    else{
        res.send(req.body['city']+" is not in the databse.")
    }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});