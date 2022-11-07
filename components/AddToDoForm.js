import { send } from "process";
import { useState } from "react";


export const AddTodoForm = () => {

   const [label, setLabel] = useState("");
   const send = () => {
      fetch("/api/add-todo", {
         method : "POST",
         headers : {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            label
         }),
      }).then(() => window.location.reload());
   }
   return (
      <form onSubmit={(e) => {
         e.preventDefault();
         send();
      }} style={{"display":"flex", "gap": "3em"}}>
         <label htmlFor="todo">Add Todo: 
         <input value={label} onChange={(e) => setLabel(e.target.value)} type="text" name="" placeholder='Take out the trash' id="" />
 
         </label>
         <button>Save</button>
      </form>
   );
}