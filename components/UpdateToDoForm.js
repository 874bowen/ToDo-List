import { send } from "process";
import { useState } from "react";


export const UpdateTodoForm = ({id}) => {
   console.log("ID: " + id);
   const [label, setLabel] = useState("");
   const send = () => {
      fetch("/api/update-todo", {
         method : "PUT",
         headers : {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            id: id,
            label,
          }),
      }).then(() => window.location.reload());
   }
   return (
      <form onSubmit={(e) => {
         e.preventDefault();
         send();
      }} style={{"display":"flex", "gap": "3em"}}>
         
         <input value={label} onChange={(e) => setLabel(e.target.value)} type="text" name="" placeholder='Take out the trash' id="" />
         <button>Update</button>
      </form>
   );
}