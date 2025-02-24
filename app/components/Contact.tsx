import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="isolate  px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className=" font-semibold tracking-tight text-balance text-3xl  lg:text-4xl  ">
          Get in Touch with Me
        </h2>
        <p className="mt-2 text-muted-foreground ">
          {' '}
          I&apos;d be delighted to help you. Don&apos;t hesitate to send me an
          email anytime..
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
            <Mail
              aria-hidden="true"
              className="size-6 text-primary-foreground"
            />
          </div>
          <div>
            <h3 className=" font-semibold ">Email Me</h3>
            <p className="mt-2  text-muted-foreground ">
              I&apos;m ready to assist you.
            </p>
            <p className="mt-4 text-sm font-semibold">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                hnnhat67@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
            <Phone
              aria-hidden="true"
              className="size-6 text-primary-foreground"
            />
          </div>
          <div>
            <h3 className=" font-semibold ">Call Me</h3>
            <p className="mt-2  text-muted-foreground ">
              I&apos;m available Mon-Fri, 9am-5pm.
            </p>
            <p className="mt-4 text-sm font-semibold">
              <dd className="font-semibold hover:underline">
                +33 7 69 57 74 67
              </dd>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
