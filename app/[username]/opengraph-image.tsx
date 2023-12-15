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

function calculateFontSize(text: string) {
  const containerWidth = 400
  const maxFontSize = 150
  const averageCharWidth = 0.4

  if (text.length === 0) return 0

  const fontSize = containerWidth / (text.length * averageCharWidth)
  return fontSize > maxFontSize ? maxFontSize : fontSize
}

export default async function Image({ params: { username } }: { params: { username: string } }) {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-black" style={{ gap: 16 }}>
        <div tw="flex flex-row flex-1" style={{ gap: 16 }}>
          <div tw="bg-[#232323] flex-5" style={{ borderBottomRightRadius: '1.5rem' }} />
          <div
            tw="bg-[#232323] flex-4"
            style={{ borderBottomLeftRadius: '1.5rem', borderBottomRightRadius: '1.5rem' }}
          />
          <div tw="bg-[#4caf50] flex-1" style={{ borderBottomLeftRadius: '1.5rem' }} />
        </div>

        <div tw="flex flex-row flex-8" style={{ gap: 16 }}>
          <div tw="bg-[#232323] flex-1" style={{ borderBottomRightRadius: '1.5rem', borderTopRightRadius: '1.5rem' }} />

          <div
            tw="bg-[#232323] flex-8 flex flex-col items-center justify-center text-white"
            style={{ borderRadius: '1.5rem', background: 'linear-gradient(to top left, #ec4899, #6366f1)' }}
          >
            <div
              tw="flex"
              style={{ fontWeight: 400, fontSize: calculateFontSize(username), letterSpacing: '-0.25rem' }}
            >
              {username}
            </div>
            <div tw="opacity-50 text-2xl">Manifold Year in Review</div>
          </div>

          <div tw="bg-[#232323] flex-1" style={{ borderTopLeftRadius: '1.5rem', borderBottomLeftRadius: '1.5rem' }} />
        </div>

        <div tw="flex flex-row flex-1" style={{ gap: 16 }}>
          <div tw="bg-[#232323] flex-1" style={{ borderTopRightRadius: '1.5rem' }} />
          <div tw="bg-[#232323] flex-4" style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }} />
          <div tw="bg-[#232323] flex-5" style={{ borderTopLeftRadius: '1.5rem' }} />
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
