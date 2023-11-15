import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const reqBody = await req.json()
    console.log('🚀 ~ file: route.ts:6 ~ POST ~ reqBody:', reqBody)

    return NextResponse.json({
      message: 'Success conection',
      success: true,
      reqBody: reqBody,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error })
  }
}
