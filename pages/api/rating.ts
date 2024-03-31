import { Id } from "@/app/types/businessTypes";
import { NextApiRequest, NextApiResponse } from "next";

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
  Object.fromEntries(keys.map(k => [k, randomFiveStarRating()]))

const randomFiveStarRating = () =>
  Math.floor(4 * Math.random() + 1);

export default rating;