import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const response = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v1/direct_upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CF_TOKEN}`,
        },
      }
    )
  ).json();
  res.json({
    ok: true,
    ...response.result,
  });
}

// 오직 URL만 요청하고 있으므로 GET으로 요청
export default withApiSession(
  withHandler({
    method: "GET",
    handler,
    isPrivate: true,
  })
);
