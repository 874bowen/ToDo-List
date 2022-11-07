import { getXataClient } from "../../util/xata";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { authorize } from "../../util/authorize";


const xata = getXataClient();
const handler = async (req, res) => {
   const { isAuthenticated, username } = await authorize(req);
   if (!isAuthenticated) {
      res.status(401).end();
      return;
   }

   const { id, label } = req.body;
   await xata.db.items.update({ id, label });
   res.end();
}

export default handler;