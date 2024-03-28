import { NextApiRequest, NextApiResponse } from "next";

const search = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello from Search' });
  }
  
export default search;