import Header from './component/Header';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Mais Barato',
  description: 'App de comparação de preços',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-col bg-[#f0f5fb]">
          <Header />
          <div className="w-full h-full px-10">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
