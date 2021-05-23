import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import './database'

//configuraciones
const app = express();

app.set('port', process.env.PORT || 4001);

app.listen(app.get('port'), ()=>{
    console.log('Listening on port: ' + app.get('port'))
});

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));  
app.use(express.static(path.join(__dirname, '../public')));  

// Rutas
app.get('/', (request, response)=>{
    response.send('Response inicial');
})
