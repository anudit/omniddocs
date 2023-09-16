/* eslint-env node */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

const font = fetch(new URL('./Inter-SemiBold.otf', import.meta.url)).then(res =>
  res.arrayBuffer()
)

export default async function (req) {
  const inter = await font

  const { searchParams } = new URL(req.url)

  // ?title=<title>
  const hasTitle = searchParams.has('title')
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'Omnid Documentation'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 80,
          backgroundColor: '#030303',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          backgroundPosition: '-30px -10px',
          fontWeight: 600,
          color: 'white'
        }}
      >
        <svg style={{ position: 'absolute', top: 70, left: 80 }} height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150">
          <path fill="white" d="M65 116c-29-2-30-80-1-86 30 2 30 82 1 86Zm14-43c1-9-5-52-20-37a85 85 0 0 0 0 74c15 15 21-28 20-37Z" />
          <path fill="white" d="M108 84h-1v2c-9 20-79 21-85-2 2-23 82-23 85 0h1ZM64 73c-11 0-24 1-35 6-5 4-6 5 0 10 9 8 80 10 75-7-8-9-28-9-40-9Z" />
          <path fill="white" d="M170 117q-12 0-22-6-9-5-14-15t-5-21q0-13 6-22 5-10 14-16 9-5 21-5 13 0 23 6 9 5 14 15 5 9 5 21 0 13-6 22-5 10-14 15-9 6-22 6Zm0-16q6 0 11-3t8-9q3-6 3-15 0-8-2-14-3-5-8-9-5-3-11-3t-11 3q-5 3-8 9t-3 15q0 7 2 13 3 6 8 10 5 3 11 3Zm65 14V76l5-3 4-2h4l4 1q2 1 2 3v40h19V77q0-6-2-11-1-5-6-8-4-3-11-3l-8 1-7 3-8 4-3-6h-11v58Zm38-39 4-3 5-2h4l4 1 2 3v40h19V77q0-6-2-11t-6-8q-4-3-12-3l-7 1-8 3-7 4Zm64 39V76l4-3 5-2h5q3 0 5 2t2 7v35h19V78l-2-12q-2-5-7-8-4-3-12-3l-8 1-8 3-7 4-3-6h-12v58Zm65 0V57h-18v58Zm-9-66q4 0 7-3t3-7q0-5-3-8t-7-3q-4 0-7 3t-3 8q0 4 3 7t7 3Zm54 54 9 12h9V31l-18 1Zm5-9-7 6-7 2q-4 0-7-2l-4-6-1-8 1-8 4-6q3-2 7-2l7 2 7 6 5-12-6-6-7-3-7-2q-10 0-16 4-7 4-11 10-4 7-4 17t4 17q4 7 11 10 6 4 15 4l8-2 8-4 5-5Z" style="white-space:pre" />
        </svg>
        <p
          style={{
            position: 'absolute',
            bottom: 100,
            left: 80,
            margin: 0,
            fontSize: 30,
            letterSpacing: -1
          }}
        >
          Everyone has the right to recognition everywhere.
        </p>
        <p
          style={{
            position: 'absolute',
            bottom: 70,
            left: 80,
            margin: 0,
            fontSize: 20,
            letterSpacing: -1
          }}
        >
          ~ Universal Declaration of Human Rights
        </p>
        <h1
          style={{
            fontSize: 82,
            margin: '0 0 40px -2px',
            lineHeight: 1.1,
            textShadow: '0 2px 30px #000',
            letterSpacing: -4,
            backgroundImage: 'linear-gradient(90deg, #fff 40%, #aaa)',
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent'
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'inter',
          data: inter,
          style: 'normal'
        }
      ]
    }
  )
}
