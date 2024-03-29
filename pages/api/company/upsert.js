import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const upload = req.body;
  const { user } = req.session;

  console.log(upload);

  await client.companyInfo.upsert({
    where: {
      id: upload.id,
    },
    create: {
      phone: upload.phone,
      email: upload.email,
      name: upload.company,
      logo: upload.logo,
      logoBgColor: upload.logoBgColor,
      location: upload.countries,
      position: upload.position,
      contract: upload.timeType,
      website: upload.website,
      description: upload.description,
      roles: upload.roles,
      requirements: upload.requirements,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
    update: {
      phone: upload.phone,
      email: upload.email,
      name: upload.company,
      logo: upload.logo,
      logoBgColor: upload.logoBgColor,
      location: upload.countries,
      position: upload.position,
      contract: upload.timeType,
      website: upload.website,
      description: upload.description,
      roles: upload.roles,
      requirements: upload.requirements,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: true,
  })
);
