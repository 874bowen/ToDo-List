import React from 'react';
import Head from 'next/head';
import { XataClient } from '../util/xata';

const index = ({ todos }) => {
   console.log("This is todos: ", todos);
   todos.map(todo => console.log(todo.label));
   return (
      <main>
         <Head>
         <link rel="stylesheet" href="https://unpkg.com/mvp.css@1.12/mvp.css" /> 
         </Head>
         <div>
            <h1>My Todo List</h1> 
            {/* <p>{todos}</p> */}
            <ul>
               {todos.map(todo => {
                  return (
                  <li key={todo.id}>
                     <label htmlFor="">
                        <input type="checkbox" checked={todo.is_done} name="" id="" />
                        {todo.label}
                     </label>
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