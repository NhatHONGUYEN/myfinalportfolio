import { IconsList } from '@/lib/data';
import Image from 'next/image';
import { BlurIn } from '../../animations/BlurIn';

export default function IconGrid() {
  return (
    <section className="py-32">
      <BlurIn>
        <div className="container">
          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h4 className="text-pretty font-semibold text-3xl  lg:text-4xl">
              This is my stack
            </h4>
            <p className="text-muted-foreground  lg:-mt-1">
              From next-gen startups to established enterprises
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-20">
            {IconsList.map((icon) => (
              <div key={icon.key} className="p-4 flex justify-center">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </BlurIn>
    </section>
  );
}
