var express = require("express");
var cors = require("cors");
var data = require("./Data/video-details.json")
require("./DB/Conn")

var port=8080;
var app = express();
app.use(cors());
app.use(express.json({limit: "10mb"}));

var Users = require("./Model/Users");
var Employees = require("./Model/Employees");

var users={
    name:"John",
    age: 45,
    gender: "male"
}

var employees={
    name: "Bob",
    age:37,
    gender: "male",
    position: "janitor",
    number: "(111) 111-1111",
    password: "123"
}

var products=[
    {
        name:"iphone",
        price:"$999.99"
    },
    {
        name:"imac",
        price:"$2499.99"
    },
    {
        name:"iwatch",
        price:"$349.99"
    }
]

app.get("/videos", (req, res)=>{
    res.send(data);
})

app.patch("/users/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const updateUser = await Users.findByIdAndUpdate(_id, req.body);
        res.status(200).send(updateUser);
    } catch (error) {
        res.status(500).send("Server Crashed");
    }
})

app.get("/videos/:id", (req, res)=>{
    var id=req.params.id;

    for(var i=0; i<data.length; i++){
        if(data[i].id===id){
            res.send(data[i])
        }
    }
})

app.get("/users/:id", async (req, res)=>{
    const _id = req.params.id;
    const getUser = await Users.findById(_id);
    res.status(200).send(getUser);
})

// Order of req and res matter

//Gets above user
// app.get("/users", (req, res)=>{
//     res.send(users);
// })

app.get("/users", async (req, res)=>{
    var findUsers = await Users.find();
    res.status(200).send(findUsers);
})

app.get("/products", (req, res)=>{
    res.send(products);
})

app.listen(port, ()=>{
    console.log("API is running on Port "+port);
});

app.post("/users", async (req, res)=>{
    var addUser = new Users(req.body);
    addUser.save();
    res.status(200).send(addUser);
})

app.delete("/users/:id", async (req, res)=>{
    try {
        const _id = req.params.id;

        const deleteUser = await Users.findByIdAndDelete(_id);
        res.status(200).send(deleteUser);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/employees", async (req, res)=>{
    var addEmployee = new Employees(req.body);
    addEmployee.save();
    res.status(200).send(addEmployee);
})

app.get("/employees", async (req, res)=>{
    var findEmployees = await Employees.find();
    res.status(200).send(findEmployees);
})

app.get("/employees/:id", async (req, res)=>{
    var _id = req.params.id;
    var getEmployee = await Employees.findById(_id);
    res.status(200).send(getEmployee);
})

app.patch("/employees/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const updateEmployee = await Employees.findByIdAndUpdate(_id, req.body);
        res.status(200).send(updateEmployee);
    } catch (error) {
        res.status(500).send("Server Crashed");
    }
})

app.delete("/employees/:id", async (req, res)=>{
    try {
        const _id = req.params.id;

        const deleteEmployee = await Employees.findByIdAndDelete(_id);
        res.status(200).send(deleteEmployee);
    } catch (error) {
        res.status(500).send(error)
    }
})