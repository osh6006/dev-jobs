export const onEmailCheck = async data => {
  const isCheck = await fetch("/api/users/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "email", data }),
  })
    .then(response => response.json().catch(() => {}))
    .then(json => json)
    .catch(error => setError(error));

  return (await isCheck?.ok) || "⛔ 이미 존재하는 이메일 입니다.";
};

export const onPhoneCheck = async data => {
  const isCheck = await fetch("/api/users/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "phone", data }),
  })
    .then(response => response.json().catch(() => {}))
    .then(json => json)
    .catch(error => setError(error));

  return (await isCheck?.ok) || "⛔ 이미 존재하는 핸드폰 번호 입니다.";
};
