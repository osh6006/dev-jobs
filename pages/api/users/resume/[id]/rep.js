import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const { id, devJobsUserId } = req.body;

  const newRepresentative = await client.resume.updateMany({
    where: { devJobsUserId: +devJobsUserId.toString() },
    data: { isRepresentative: false },
  });

  const previousRepresentative = await client.resume.update({
    where: { id: +id.toString() },
    data: { isRepresentative: true },
  });
  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: false,
  })
);
