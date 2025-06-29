import '../globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Login',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
              className="w-auto h-auto"
              width={500}
              height={500}
            />
          </div>
          {children}
        </section>
      </body>
    </html>
  );
}
