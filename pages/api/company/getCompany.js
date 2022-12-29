import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const companys = await client.companyInfo.findMany({});
  res.json({
    ok: true,
    companys,
  });
}

export default withApiSession(
  withHandler({
    method: "GET",
    handler,
    isPrivate: true,
  })
);
