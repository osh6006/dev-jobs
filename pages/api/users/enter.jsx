import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req, res) {
  // req.body는 req의 인코딩을 기준으로 인코딩 된다는 것을 알 수 있다.
  // 따라서 fetch할 때 header를 작성해 줘야함
  console.log(req.body);
  res.status(200).end();
}

export default withHandler("POST", handler);
