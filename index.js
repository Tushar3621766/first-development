const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const port = 5000;

app.get('/',(req, res) => {
    res.send('Hello From My first ever node')
});

const users =[
    {id: 0, name: "Mahfujur", email: 'tushar@gmail.com', phone: '017801525897'},
    {id: 1, name: "Rahman", email: 'tushar@gmail.com', phone: '017801525897'},
    {id: 2, name: "Tushar", email: 'tushar@gmail.com', phone: '017801525897'},
    {id: 3, name: "Mahfujur", email: 'tushar@gmail.com', phone: '017801525897'},
    {id: 4, name: "Rahman", email: 'tushar@gmail.com', phone: '017801525897'},
    {id: 5, name: "Tushar", email: 'tushar@gmail.com', phone: '017801525897'},
]

app.get('/users',(req,res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})

app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser)
})

app.get('/users/:id',(req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits/mangoes/fazli', (req, res) =>{
    res.send('Fazli akta tok marka am');
})
app.listen(port, () => {
    console.log('listening to port',port);
});