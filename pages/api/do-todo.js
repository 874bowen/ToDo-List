import { getXataClient } from "../../util/xata";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { authorize } from "../../util/authorize";

// type ResponseData = {
//    message: string
// }

const xata = getXataClient();
const handler = async (req, res) => {
   const { isAuthenticated, username } = await authorize(req);
   if (!isAuthenticated){
      res.status(401).end();
      return;
   }

   const {id, is_done} = req.body;
   await xata.db.items.update({id, is_done});
   res.end();
}

export default handler;