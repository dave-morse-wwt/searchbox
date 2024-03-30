import { Id } from "@/app/types/businessTypes";
import { NextApiRequest, NextApiResponse } from "next";

const randomFiveStarRating = () => Math.floor(Math.random() * 5 + 1);

const rating = (req: NextApiRequest, res: NextApiResponse) => {
  const ratings = findRatings(toArray(req.query?.id));
  res.status(200).json(ratings);
}

const toArray = (id: string | string[] | undefined): string[] => {
  if (id === undefined) return [];
  else if (Array.isArray(id)) return id;
  else return [id];
}

const findRatings = (keys: Id[]): Record<Id, number>  =>
  Object.fromEntries(keys.map(k => [k, Math.floor(5 * Math.random() + 1)]))

export default rating;