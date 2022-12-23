import client from "libs/server/client";
import withHandler from "libs/server/withHandler";

async function handler(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
}

export default withHandler("POST", handler);
