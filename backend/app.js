import express from 'express';
import morgan from 'morgan';
import connectToDb from './db/db.js';
import userRoutes from './routes/userRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import aiRoutes from './routes/aiRoutes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

connectToDb();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use('/users',userRoutes);
app.use('/projects',projectRoutes);
app.use('/ai',aiRoutes);

app.get('/',(req,res) => {
    res.send('hello world')
})


export default app;