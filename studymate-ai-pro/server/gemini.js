
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function askGemini(message){
 const model=genAI.getGenerativeModel({model:"gemini-2.5-flash"});
 const result=await model.generateContent(`
 Kamu adalah StudyMate AI.
 Jawab dengan ramah dan edukatif.
 Pertanyaan: ${message}
 `);
 return result.response.text();
}
