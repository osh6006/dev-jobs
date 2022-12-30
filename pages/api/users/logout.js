import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  req.session.destroy();
  res.send({ ok: true });
}

export default withApiSession(
  withHandler({ method: "POST", handler, isPrivate: true })
);
