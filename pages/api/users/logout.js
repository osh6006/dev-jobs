import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  try {
    req.session.destroy();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.json({ ok: false });
  }
}

export default withApiSession(
  withHandler({ method: "GET", handler, isPrivate: true })
);
