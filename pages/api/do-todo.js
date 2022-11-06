import { getXataClient } from "../../util/xata";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//    message: string
// }

const xata = getXataClient();
const handler = async (req, res) => {
   const {id, is_done} = req.body;
   await xata.db.items.update({id, is_done});
   res.end();
}

export default handler;