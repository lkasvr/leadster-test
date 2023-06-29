import { Plus_Jakarta_Sans } from 'next/font/google';

import StyledComponentsRegistry from '@/libs/styled-components/registry';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  style: ['italic', 'normal'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
