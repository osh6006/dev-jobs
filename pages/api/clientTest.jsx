import client from "../../libs/server/client";

export default async function handler(req, res) {
  await client.devJobsUser.create({
    data: {
      email: "hi22",
      name: "hi",
    },
  });
  res.json({
    ok: true,
    data: "xx",
  });
}
