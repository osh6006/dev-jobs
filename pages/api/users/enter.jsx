import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const { email, password } = req.body;
  if (email) {
    const user = await client.devJobsUser.findUnique({
      where: {
        email,
      },
    });
    if (user && user.password === password) {
      req.session.user = {
        id: user?.id,
      };
      await req.session.save();
      return res.json({ ok: true });
    } else {
      return res.json({
        ok: false,
        message: "⛔ 아이디 혹은 비밀번호가 일치하지 않습니다.",
      });
    }
  }
}

export default withApiSession(withHandler("POST", handler));
