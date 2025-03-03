const userRouter = require('./userRouter')

const configureRouter = (app) =>{
    
//Define a route
app.get('/', (req,res)=>{
    res.send('<h2>Welcome to my server</h2>')
  })
  
  //about route
  app.get('/about', (req,res)=>{
      res.send('<p>This is my server</p>')
    })
  //user routes by creating user routes
  app.use('/users', userRouter);
}
module.exports = configureRouter;