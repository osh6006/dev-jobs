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

    const getCompanyData = [];
    const promises = getApplyData.map(async element => {
      const companyInfo = await client.companyInfo.findUnique({
        where: {
          id: element.companyInfoId,
        },
      });
      getCompanyData.push(companyInfo);
    });
    await Promise.all(promises);

    res.json({
      ok: true,
      getApplyData,
      getCompanyData,
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
