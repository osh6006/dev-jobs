import client from "libs/server/client";
import withHandler from "libs/server/withHandler";

async function handler(req, res) {
  const { password, email } = req.body();
  if (email) {
    let user = await client.devJobsUser.findUnique({
      where: {
        email,
        password,
      },
    });

    console.log(user);

    // if (user) {
    //   if (password === user.pass) {
    //   }
    // } else {
    // }
  }
  res.status(200).end();
}

export default withHandler("POST", handler);
