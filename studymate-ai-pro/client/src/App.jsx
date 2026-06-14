
import {useState,useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ChatBox from './components/ChatBox';

export default function App(){

 const [messages,setMessages]=useState(()=>{
  const saved=localStorage.getItem('chat');
  return saved?JSON.parse(saved):[];
 });

 const [input,setInput]=useState('');
 const [loading,setLoading]=useState(false);

 useEffect(()=>{
  localStorage.setItem('chat',JSON.stringify(messages));
 },[messages]);

 const sendMessage=async()=>{
  if(!input.trim()) return;

  const userMsg={role:'user',text:input};

  setMessages(prev=>[...prev,userMsg]);
  setLoading(true);

  try{
   const res=await axios.post(
    'http://localhost:5000/chat',
    {message:input}
   );

   setMessages(prev=>[
    ...prev,
    userMsg,
    {role:'bot',text:res.data.reply}
   ]);

  }catch{
   setMessages(prev=>[
    ...prev,
    {role:'bot',text:'Server Error'}
   ]);
  }

  setLoading(false);
  setInput('');
 };

 return(
 <div>
  <Navbar/>

  <div style={{
   width:'80%',
   margin:'20px auto'
  }}>

   <ChatBox messages={messages}/>

   {loading && <p>AI sedang mengetik...</p>}

   <div style={{display:'flex',gap:'10px'}}>
    <input
     value={input}
     onChange={(e)=>setInput(e.target.value)}
     style={{
      flex:1,
      padding:'12px'
     }}
    />

    <button
      onClick={sendMessage}
      style={{
       padding:'12px 20px'
      }}
    >
      Kirim
    </button>
   </div>

  </div>
 </div>
 )
}
