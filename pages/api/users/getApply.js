import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const session = req.session;

  try {
    const getApplyData = await client.apply.findMany({
      where: {
        userId: +session.user.id,
      },
    });
    console.log(getApplyData);
    // res.json({
    //   ok: true,
    //   getApplyData,
    // });
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
