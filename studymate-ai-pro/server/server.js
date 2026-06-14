
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { askGemini } from './gemini.js';

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

app.post('/chat', async(req,res)=>{
 try{
   const {message}=req.body;
   const reply=await askGemini(message);
   res.json({reply});
 }catch(err){
   res.status(500).json({reply:'Terjadi kesalahan'});
 }
});

app.listen(process.env.PORT||5000,()=>{
 console.log('Server Running');
});
