import client from "libs/server/client";
import withHandler from "libs/server/withHandler";

async function handler(req, res) {
  const { type, data } = req.body;

  if (data) {
    let user = null;
    switch (type) {
      case "email":
        user = await client.devJobsUser.findUnique({
          where: {
            email: data,
          },
        });
        break;
      case "phone":
        user = await client.devJobsUser.findUnique({
          where: {
            phone: data,
          },
        });
        break;
      default:
        break;
    }

    if (user === null) {
      return res.json({ ok: true });
    } else {
      return res.json({ ok: false });
    }
  }
}

export default withHandler({ method: "POST", handler, isPrivate: false });
