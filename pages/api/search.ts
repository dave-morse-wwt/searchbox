import { Product } from "@/app/types/businessTypes";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";


const search = async (req: NextApiRequest, res: NextApiResponse) => {
  const q = req.query?.q;
  await sleep(700);
  res.status(200).json(q ? [`${q} classic`, `diet ${q}`, `mecha${q}`, 'beans'].map(name => ({name, id: randomUUID() })) : []);
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default search;