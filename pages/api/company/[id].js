import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const { id } = req.query;
  const company = await client.companyInfo.findUnique({
    where: {
      id: +id.toString(),
    },
  });
  res.json({
    ok: true,
    company,
  });
}

export default withApiSession(
  withHandler({
    method: "GET",
    handler,
    isPrivate: true,
  })
);
