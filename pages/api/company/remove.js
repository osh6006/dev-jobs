import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const removeId = req.body;

  console.log(removeId);

  const isRemoved = await client.companyInfo.delete({
    where: {
      id: removeId,
    },
  });

  console.log(isRemoved);

  if (isRemoved) {
    console.log("removed!!");
    return res.json({
      ok: true,
    });
  } else {
    return res.json({
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
