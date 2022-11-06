import { IncomingMessage } from "http";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { getXataClient } from "./xata";
import bcrypt from "bcrypt";
import { promisify } from "util";

const compare = promisify(bcrypt.compare);
const hash = promisify(bcrypt.hash);


export const authorize = async (req) => {
   
   const { authorization } = req.headers;
   // const authorization = req;
   // console.log("This is "+ authorization);
   
   if (!authorization) {
      return {isAuthenticated: false};
   }

   // authorization: "Basic base64(username:password"
   const [, credentials] = authorization.split(" ");
   const [username, password] = Buffer.from(credentials, "base64").toString("utf-8").split(":");


   const xata = getXataClient();
   const user = await xata.db.users.filter("username", username).getFirst();

   //user doesn't exist
   if (!user){
      await xata.db.users.create({username, password: await hash(password, 10)})
      return {isAuthenticated: true, username};
   }

   // user exists & we have passwords
   const passwordsMatch = compare(password, user.password);
   
   if (!passwordsMatch) {
      return {isAuthenticated: false, username}
   }

   return {isAuthenticated: true, username}
}
