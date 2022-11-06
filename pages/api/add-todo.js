import { getXataClient } from "../../util/xata";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";


const xata = getXataClient();
const handler = async (req, res) => {
   const {label} = req.body;
   await xata.db.items.create({label});
   res.end();
}

export default handler;