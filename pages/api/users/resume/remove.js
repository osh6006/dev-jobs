import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const removeId = req.body;

  const isRemoved = await client.resume.delete({
    where: {
      id: removeId,
    },
  });

  if (isRemoved) {
    res.json({
      ok: true,
    });
  } else {
    res.json({
      ok: false,
    });
  }
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: true,
  })
);
