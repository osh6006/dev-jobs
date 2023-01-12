import withHandler from "libs/server/withHandler";
import client from "libs/server/client";
import { withApiSession } from "libs/server/withSession";

async function handler(req, res) {
  const upload = req.body;
  const { user } = req.session;

  const result = await client.resume.upsert({
    where: {
      id: upload.id,
    },
    create: {
      name: upload.name,
      phone: upload.phone,
      email: upload.email,
      introduction: upload.introduction,
      school: upload.school,
      career: upload.career,
      skill: upload.skill,
      certificate: upload.certificate,
      link: upload.link,
      ability: upload.ability,
      hope: upload.hope,
      title: upload.title,
      isRepresentative: upload.isRepresentative,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
    update: {
      name: upload.name,
      phone: upload.phone,
      email: upload.email,
      introduction: upload.introduction,
      school: upload.school,
      career: upload.career,
      skill: upload.skill,
      certificate: upload.certificate,
      link: upload.link,
      ability: upload.ability,
      hope: upload.hope,
      title: upload.title,
      isRepresentative: upload.isRepresentative,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  console.log(result);

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
