import { IconsList } from '@/lib/data';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function IconGrid() {
  const t = useTranslations('techStack');

  return (
    <section className="py-32 max-w-5xl mx-auto">
      <div className="container">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h4 className="text-pretty font-semibold text-3xl lg:text-4xl">
            {t('title')}
          </h4>
          <p className="text-muted-foreground w-80 lg:w-auto lg:max-w-5xl">
            {t('description')}
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-3 w-80 mx-auto md:w-auto md:grid-cols-4 lg:grid-cols-5 gap-6 mt-20">
          {IconsList.map((icon) => (
            <div key={icon.key} className="p-4 flex justify-center">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={48}
                height={48}
                className="object-contain"
                style={{ width: '48px', height: '48px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
