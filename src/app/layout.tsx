import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Louis Gundelwein",
  description: "Personal Website from Louis Gundelwein",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
