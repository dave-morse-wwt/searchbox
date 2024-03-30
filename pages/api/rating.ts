import { NextApiRequest, NextApiResponse } from "next";

const randomFiveStarRating = () => Math.floor(Math.random() * 5 + 1);

const rating = (req: NextApiRequest, res: NextApiResponse) => {
  const ratings = findRatings(toArray(req.query?.q));
  res.status(200).json(ratings);
}

const toArray = (s: string | string[] | undefined): string[] => {
  if (s === undefined) return [];
  else if (Array.isArray(s)) return s;
  else return [s];
}

const findRatings = (keys: string[]): Record<string,number>  =>
  Object.fromEntries(keys.map(k => [k, k.length % 5 +  1]))

export default rating;