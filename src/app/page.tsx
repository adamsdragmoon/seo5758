import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import logoPocari4D from '@/images/logos/pocari4d.png'
import image1 from '@/images/photos/bannerpocari4d.webp'
import image2 from '@/images/photos/pasti-jp-seo-pocari4d.webp'
import image3 from '@/images/photos/slot-gacor-pocari4d.webp'
import image4 from '@/images/photos/slot-thailand-pocari4d.jpg'
import image5 from '@/images/photos/slotgacorbos-pocari4dwebp.webp'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'


function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function KlaimBonus() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Klaim Bonus</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Berlangganan Informasi Slot Gacor dan klaim bonus anda. Jangan lewatkan kesempatan ini!
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button href="https://shrtx.cc/go/bQWYVl" target="_blank" rel="noopener noreferrer" type="submit" className="ml-4 flex-none">
          Daftar
        </Button>
      </div>
    </form>
  )
}

interface GameProvider {
  provider: string
  category: string
  logo: ImageProps['src']
}

function GameProvider({ gameprovider }: { gameprovider: GameProvider }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={gameprovider.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Game Provider</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {gameprovider.provider}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {gameprovider.category}
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<GameProvider> = [
    {
      provider: 'IDN Slot',
      category: 'Slot Games',
      logo: logoPocari4D,
    },
    {
      provider: 'Pragmatic Play',
      category: 'Slot Games',
      logo: logoPocari4D,
    },
    {
      provider: 'PG Soft',
      category: 'Slot Games',
      logo: logoPocari4D,
    },
    {
      provider: 'Microgaming',
      category: 'Slot Games',
      logo: logoPocari4D,
    },
    {
      provider: 'Habanero',
      category: 'Slot Games',
      logo: logoPocari4D,
    },
    {
      provider: 'GMW',
      category: 'Slot Games',
      logo: logoPocari4D,
    },
    {
      provider: 'Top Trend',
      category: 'Slot Games',
      logo: logoPocari4D,
    },
    {
      provider: 'No Limit City',
      category: 'Slot Games',
      logo: logoPocari4D,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Daftar Game Provider Slot</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((gameprovider, gameproviderIndex) => (
          <GameProvider key={gameproviderIndex} gameprovider={gameprovider} />
        ))}
      </ol>
      <Button href="https://shrtx.cc/go/bQWYVl" target="_blank" rel="noopener noreferrer" variant="secondary" className="group mt-6 w-full">
        Daftar untuk Bermain Slot Gacor !
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Informasi Slot Gacor Terbaru 2024.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Kami menyajikan informasi dan update terbaru tentang slot gacor di tahun 2024. Jika kamu sedang mencari slot dengan tingkat pembayaran tinggi dan sering memberikan jackpot, jangan lewatkan rekomendasi slot gacor terbaik di tahun 2024 hanya di website ini. Bagi para penggemar slot, jangan lewatkan informasi terbaru tentang rahasia sukses memenangkan slot gacor favoritmu dan raih keberuntungan besar!
          </p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <KlaimBonus />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
