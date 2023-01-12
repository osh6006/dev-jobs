import client from "libs/server/client";
import withHandler from "libs/server/withHandler";

async function handler(req, res) {
  const registerInfo = req.body;
  console.log(registerInfo);
  if (registerInfo) {
    try {
      await client.devJobsUser.create({
        data: {
          phone: registerInfo.phone,
          email: registerInfo.email,
          password: registerInfo.password,
          name: registerInfo.name,
          company: registerInfo.company,
          isCEO: registerInfo.isCEO,
        },
      });
      res.json({ ok: true });
    } catch (error) {
      console.log("register error : ", error);
      res.status(500).json(error);
    }
  } else {
    res.json({
      ok: false,
      message:
        "가입에 실패했습니다 인터넷 연결 혹은 관리자에게 문의 부탁드립니다.",
    });
  }
}

export default withHandler({ method: "POST", handler, isPrivate: false });
