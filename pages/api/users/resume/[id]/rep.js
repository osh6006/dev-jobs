import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const { id } = req.query;
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
