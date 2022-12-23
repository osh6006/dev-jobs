import client from "libs/server/client";
import withHandler from "libs/server/withHandler";

async function handler(req, res) {
  const { email } = req.body;
  if (email) {
    const user = await client.devJobsUser.findUnique({
      where: {
        email,
      },
    });
    console.log(email);
    console.log(user);

    if (user === null) {
      return res.json({ ok: true });
    } else {
      return res.json({ ok: false });
    }
  }
}

export default withHandler("POST", handler);
