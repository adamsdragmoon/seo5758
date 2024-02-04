import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from '@/images/banner.webp'
import { Button } from '@/components/Button'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}



export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Informasi Slot Gacor terbaru 2024. 
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className='font-bold tracking-tight text-zinc-800 dark:text-zinc-100'>Cara Memenangkan Permainan Slot Gacor di Tahun 2024: Tips dan Trik Efektif</h2>
            <ul className='space-y-6'>
              <li>
                  <strong>Pilih Slot dengan RTP Tinggi</strong>
                  <p>RTP (Return to Player) adalah persentase uang taruhan yang dikembalikan kepada pemain dalam jangka waktu tertentu. Pilihlah mesin slot dengan RTP yang tinggi, karena ini akan meningkatkan peluang Anda untuk mendapatkan kemenangan dalam jangka panjang.</p>
              </li>
              <li>
                  <strong>Kenali Volatilitas Slot</strong>
                  <p>Volatilitas mengacu pada seberapa sering dan seberapa besar kemenangan dalam permainan slot. Slot dengan volatilitas tinggi cenderung memberikan kemenangan yang lebih besar, tetapi dengan frekuensi yang lebih rendah. Sementara slot dengan volatilitas rendah memberikan kemenangan lebih kecil namun lebih sering. Pilihlah sesuai dengan preferensi Anda dan modal yang Anda miliki.</p>
              </li>
              <li>
                  <strong>Atur Batasan Taruhan</strong>
                  <p>Penting untuk mengatur batasan taruhan Anda sebelum memulai bermain. Tetapkan batasan maksimum untuk jumlah uang yang ingin Anda pertaruhkan dan disiplinlah untuk tidak melebihi batasan tersebut, bahkan saat suasana hati Anda sedang tinggi.</p>
              </li>
              <li>
                  <strong>Manfaatkan Bonus dan Promosi</strong>
                  <p>Banyak kasino online menawarkan bonus dan promosi kepada pemain baru maupun yang sudah ada. Manfaatkan ini sebaik mungkin untuk meningkatkan peluang Anda dalam memenangkan permainan slot. Namun, pastikan untuk membaca syarat dan ketentuan yang terkait dengan bonus tersebut.</p>
              </li>
              <li>
                  <strong>Perhatikan Waktu Bermain</strong>
                  <p>Beberapa penelitian menunjukkan bahwa waktu tertentu dalam sehari bisa memiliki pengaruh pada hasil permainan slot. Cobalah bermain pada waktu yang berbeda-beda dan catat hasilnya untuk menentukan waktu terbaik bagi Anda.</p>
              </li>
              <li>
                  <strong>Bermain dengan Santai dan Bijak</strong>
                  <p>Jangan terlalu terpaku pada kemenangan atau kekalahan Anda. Tetaplah santai dan bijak dalam mengelola modal Anda. Jika Anda merasa kelelahan atau frustrasi, sebaiknya berhenti bermain dan istirahat sejenak.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            
          <Button href="https://shrtx.cc/go/bQWYVl" target='_blank' className="mt-8">Daftar ke Situs Slot Gacor Sekarang
          </Button>
          </ul>
        </div>
      </div>
    </Container>
  )
}
