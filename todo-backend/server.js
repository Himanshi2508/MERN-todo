const express=require('express');
const mongoose=require('mongoose');
const Cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const{
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
}=require('./controllers/todoController')
//App config
const app=express();
const connectionURL=process.env.MONGO_URI;
const port=process.env.PORT||8000

//Middlewares
//convert to json
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connectionURL)
.then(()=>{
    app.listen(port,()=>console.log(`Running on port:${port}`))
})
.catch((err)=>{
    console.log(err);
});

//API endpoints
//Get Todos list
app.get('/todos',getTodos)
//Create a new todos
app.post('/todos',createTodo)
//update a Todo
app.put('/todos/:id',updateTodo)
//Delete a todo
app.delete('/todos/:id',deleteTodo)



