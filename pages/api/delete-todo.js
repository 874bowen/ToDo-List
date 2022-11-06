import { getXataClient } from "../../util/xata";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//    message: string
// }

const xata = getXataClient();
const handler = async (req, res) => {
   const {id} = req.body;
   await xata.db.items.delete(id);
   res.end();
}

export default handler;