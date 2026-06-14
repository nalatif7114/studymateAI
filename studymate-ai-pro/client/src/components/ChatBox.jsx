
import Message from './Message';

export default function ChatBox({messages}){
 return(
  <div style={{height:'70vh',overflowY:'auto'}}>
   {messages.map((m,i)=>
    <Message key={i} role={m.role} text={m.text}/>
   )}
  </div>
 )
}
