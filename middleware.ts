import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  return NextResponse.redirect((`${process.env.REDIRECT_LINK}`));
}
