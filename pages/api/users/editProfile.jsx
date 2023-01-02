import client from "libs/server/client";
import withHandler from "libs/server/withHandler";

async function handler(req, res) {
  const registerInfo = req.body;
  if (registerInfo) {
    try {
      await client.devJobsUser.update({
        where: {
          id: registerInfo.id,
        },
        data: {
          phone: registerInfo.phone,
          email: registerInfo.email,
          name: registerInfo.name,
          company: registerInfo.company,
          isCEO: registerInfo.isCEO,
        },
      });
      return res.json({ ok: true });
    } catch (error) {
      console.log("register error : ", error);
      res.status(500).json(error);
    }
  } else {
    return res.json({
      ok: false,
      message: "⛔ 업데이트에 실패하였습니다.",
    });
  }
}

export default withHandler({ method: "POST", handler, isPrivate: false });
