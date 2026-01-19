import Image from 'next/image';
import PageTitle from '@/components/PageTitle';

export const metadata = {
  title: 'Kontakt – Jolanta Kwilman',
  description: 'Kontakt - Pracownia Architektury Wnętrz Jolanta Kwilman',
};

export default function Kontakt() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <PageTitle>Kontakt</PageTitle>

      <article className="bg-white px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16 shadow-sm">
        <div className="entry-content">
          <div className="entry max-w-[600px] mx-auto">
            <hr className="border-t border-gray-300 mb-10 sm:mb-12 max-w-[400px] mx-auto" />

            <div className="flex justify-center mb-10 sm:mb-12">
              <div className="rounded-full overflow-hidden w-[160px] h-[168px] sm:w-[182px] sm:h-[192px]">
                <Image
                  src="/profile.jpg"
                  alt="Jolanta Kwilman"
                  width={182}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="text-center font-light text-foreground space-y-1.5 text-base sm:text-lg">
              <p className="italic">Jolanta Kwilman</p>
              <p className="italic">Tel: +48 694 425 301</p>
              <p className="italic">e-mail: jkwilman@post.pl</p>
              <p className="italic">ul. Kalinowej Łąki 23</p>
              <p className="italic">01-934 Warszawa</p>
            </div>

            <hr className="border-t border-gray-300 mt-10 sm:mt-12 max-w-[400px] mx-auto" />
          </div>
        </div>
      </article>
    </div>
  );
}
