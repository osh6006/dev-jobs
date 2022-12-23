import { withIronSessionApiRoute } from "iron-session/next";

const cookieOpts = {
  cookieName: "devjobsession",
  password: process.env.SESSION_PASSWORD,
};

export function withApiSession(fn) {
  return withIronSessionApiRoute(fn, cookieOpts);
}
