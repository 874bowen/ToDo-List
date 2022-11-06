import React from 'react';
import Head from 'next/head';
import { XataClient } from '../util/xata';
import { AddTodoForm } from '../components/AddToDoForm';

const index = ({ todos }) => {
   // console.log("This is todos: ", todos);
   // todos.map(todo => console.log(todo.label));
   return (
      <main>
         <Head>
         <link rel="stylesheet" href="https://unpkg.com/mvp.css@1.12/mvp.css" /> 
         </Head>
         <div>
            <h1>My Todo List</h1> 
            {/* <p>{todos}</p> */}
            <AddTodoForm />
            <ul>
               {todos.map(todo => {
                  return (
                  <li key={todo.id}>
                     <div style={{"display":"flex", "gap": "3em", "align-items": "center","flex-direction": "row"}} className=''>
                        <label htmlFor="">
                           <input onChange={() => {
                              fetch("/api/do-todo", {
                                 method : "PUT",
                                 headers : {
                                    "Content-Type": "application/json"
                                 },
                                 body: JSON.stringify({
                                    id: todo.id,
                                    is_done: !todo.is_done,
                                 }),
                              }).then(() => window.location.reload());
                           }} type="checkbox" checked={todo.is_done} name="" id="" />
                           {todo.label}
                        </label>
                        <button onClick={() => {
                              fetch("/api/delete-todo", {
                                 method : "DELETE",
                                 headers : {
                                    "Content-Type": "application/json"
                                 },
                                 body: JSON.stringify({
                                    id: todo.id,
                                 }),
                              }).then(() => window.location.reload());
                           }}>Delete</button>
                     </div>
                  </li>
                  );
               })}
            </ul>
         </div>
      </main>
   )
}

export default index;

const xata = new XataClient()

export const getServerSideProps = async () => {
   const todos = await xata.db.items.getMany()

   return {
      props: {
         todos
      }
   }
}