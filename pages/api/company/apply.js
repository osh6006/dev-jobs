import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const ApplyInfo = req.body;

  const Apply = await client.apply.create({
    data: {
      state: "pending",
      user: {
        connect: { id: +ApplyInfo.applyUserId.toString() },
      },
      ceo: {
        connect: { id: +ApplyInfo.devJobsUserId },
      },
      companyInfo: {
        connect: { id: +ApplyInfo.id },
      },
    },
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
