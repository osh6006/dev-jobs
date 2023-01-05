import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const { id } = req.query;
  const resume = await client.resume.findMany({
    where: {
      devJobsUserId: +id.toString(),
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  res.json({
    ok: true,
    resume,
  });
}

export default withApiSession(
  withHandler({
    method: "GET",
    handler,
    isPrivate: false,
  })
);
