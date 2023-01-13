import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const session = req.session;
  const query = req.query;

  try {
    const getApplyData = await client.apply.findFirst({
      where: {
        userId: +session.user.id,
        companyInfoId: +query.id.toString(),
      },
    });
    res.json({
      ok: true,
      getApplyData,
    });
  } catch (error) {
    console.log(error);
  }
}

export default withApiSession(
  withHandler({
    method: "GET",
    handler,
    isPrivate: false,
  })
);
