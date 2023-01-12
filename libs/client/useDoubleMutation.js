import { useState } from "react";

const useDoubleMutation = url => {
  const [doubleLoading, setLoading] = useState(false);
  const [doubleData, setMutationData] = useState(undefined);
  const [doubleError, setError] = useState(undefined);

  // req.body는 req의 인코딩을 기준으로 인코딩 된다는 것을 알 수 있다.
  // 따라서 fetch할 때 header를 작성해 줘야함
  function mutation(data) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json().catch(() => {}))
      .then(json => setMutationData(json))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }
  return [mutation, { doubleLoading, doubleData, doubleError }];
};

export default useDoubleMutation;
