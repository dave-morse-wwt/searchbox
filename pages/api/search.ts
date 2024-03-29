import { NextApiRequest, NextApiResponse } from "next";

const search = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("search endpoint hit")
  res.status(200).json({ text: 'Hello from Search' });
}
  
export default search;