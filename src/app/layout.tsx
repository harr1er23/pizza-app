import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { Container } from "@shared/ui";

export const metadata: Metadata = {
  title: "Pizza App",
  description: "Пицца-сервис с доставкой",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Providers>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
