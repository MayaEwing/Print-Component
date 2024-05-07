import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // @ts-ignore
    const formData = await req.formData();
    console.log(formData);
  }
}
