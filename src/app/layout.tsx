import "../styles/globals.css";

import { CalculatorProvider } from "@/context/CalculatorContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CalculatorProvider>
            {children}
        </CalculatorProvider>
      </body>
    </html>
  );
}
