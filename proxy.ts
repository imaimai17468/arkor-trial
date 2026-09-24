import { NextResponse } from "next/server";

export function proxy() {
  const response = NextResponse.next();
  response.headers.set("x-probe-proxy", "ran");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|probe-large.png).*)"],
};
