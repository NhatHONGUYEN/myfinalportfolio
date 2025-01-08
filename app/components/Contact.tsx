import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 mx-20 flex text-center lg:mx-auto  sm:text-left "
    >
      <div className="container ">
        <div>
          <span className="text-sm font-semibold">Contact Me</span>
          <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
            Get in Touch with Me
          </h1>
          <p className=" text-muted-foreground">
            I&apos;d be delighted to help you. Don&apos;t hesitate to send me an
            email anytime.
          </p>
        </div>
        <div className="grid  mt-10 gap-10 md:mt-0  md:grid-cols-3">
          <div>
            <span className=" hidden  mt-10 mb-4     md:flex size-12  flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto  " />
            </span>
            <p className="mb-2 text-lg font-semibold">Email Me</p>
            <p className="mb-3 text-muted-foreground">
              I&apos;m ready to assist you.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              hnnhat67@gmail.com
            </a>
          </div>

          <div>
            <span className=" hidden mt-10 mb-4    md:flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold"> Call Me</p>
            <p className="mb-3 text-muted-foreground">
              I&apos;m available Mon-Fri, 9am-5pm.
            </p>
            <dd className="font-semibold hover:underline">+33 7 69 57 74 67</dd>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
