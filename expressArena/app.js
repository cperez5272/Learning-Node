const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello Express!');
    app.get(PATH, HANDLER)
  });

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });
  
app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
  })

app.get('/pizza/pepperoni', (req,res) => {
      res.send('Oh your pizza is on the way!')
  })

app.get('/pizza/pineapple', (req,res) => {
      res.send('YOU SHOULD BE ASHAMED OF YOURSELF. NEVER CALL HERE AGAIN')
  })

app.get('/tales', (req,res) => {
      const details = `Here are tales games you have played:
      TalesOfTheAbyss
      TalesOfDestiny: ${req.TalesOfDestiny}
      TalesOfVesperia: ${req.TalesOfVesperia}
      `;
      res.send(details)
  })

app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); //do not send any data back to the client
  });

app.get('/greetings', (req,res) => {
    const name = req.query.name
    const race = req.query.race

if(!name) {
    return res.status(400).send('Please provide a name');
}

if(!race) {
    return res.status(400).send('Please provide a race')
}

const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`

res.send(greeting)

})

app.get('/sum', (req,res) => {
    const a = req.query.a
    const b = req.query.b
    const c = a + b

    // const a = parseInt(a) Would just give me an error :c
    // const b = parseInt(b)
    
    if(!a) {
        return res.status(400).send('Please provide number')
    }
    if(!b) {
        return res.status(400).send('Please provide number')
    }

    const combine = `If you can add ${a} and ${b} you will end up with ${c}`

    res.send(combine)
})

// const a = parseInt(a) is the trick to solve the issue above. 

// app.get('/cipher', (req,res) => {
//     const text = 
//     const shift = 
// })