import { NextResponse } from 'next/server'
 
export function middleware(request) {

    //.. Check if user is logged in 
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'content-type': 'application/json'} }
    )
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/my-account',
}