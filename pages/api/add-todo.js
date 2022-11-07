import { getXataClient } from "../../util/xata";

import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { authorize } from "../../util/authorize";



const handler = async (req, res) => {
   const { isAuthenticated, username } = await authorize(req);
   if (!isAuthenticated){
      res.status(401).end();
      return;
   }

   const {label} = req.body;

   const xata = getXataClient();

   const user = await xata.db.users.filter( {username} ).getFirst();
   console.log(user);
   await xata.db.items.create({label, user: {id: user.id}});
   res.end();
}

export default handler;