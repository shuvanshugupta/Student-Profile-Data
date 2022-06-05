const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://shuvanshugupta:shuvanshu@cluster0.nx8kxvy.mongodb.net/?retryWrites=true&w=majority',
    {useCreateIndex:true ,useNewUrlParser:true,useUnifiedTopology: true },()=>{
        console.log("connected to database.")
    })


