import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Manifold Year in Review'
export const size = {
  width: 800,
  height: 400,
}

export const contentType = 'image/png'

const getFont = async () => {
  const res = await fetch(new URL('@/font/Inter-SemiBold.ttf', import.meta.url))
  return await res.arrayBuffer()
}

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-black">
        <div tw="flex flex-1 items-center justify-center">
          <span
            style={{ background: 'linear-gradient(to right, #ec4899, #6366f1)', backgroundClip: 'text' }}
            tw="text-6xl text-white font-semibold mx-16 tracking-tighter text-transparent"
          >
            Manifold Year in Review
          </span>
        </div>

        <div tw="flex w-full px-24 pb-12" style={{ gap: 16 }}>
          <div tw="bg-[#03a9f4] h-48 flex flex-col items-center flex-1 p-4 text-white rounded-3xl">
            <div tw="flex-1 flex items-center justify-center font-mono font-bold text-3xl">$123,954</div>
            <div tw="text-lg tracking-tight text-white/60">Riased for charity</div>
          </div>
          <div tw="bg-[#232323] h-48 flex flex-col items-center flex-1 p-4 text-white rounded-3xl">
            <div tw="flex-1 flex items-center justify-center font-mono font-bold text-5xl">43K</div>
            <div tw="text-lg tracking-tight text-white/60">New Users</div>
          </div>
          <div tw="bg-[#232323] h-48 flex flex-col items-center flex-1 p-4 text-white rounded-3xl">
            <div tw="flex-1 flex items-center justify-center font-mono text-3xl">
              <div tw="bg-white text-black rounded-lg p-2 py-1">1,846,734</div>
            </div>
            <div tw="text-lg tracking-tight text-white/60">Bets</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await getFont(),
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
