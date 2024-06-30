import "../(user)/globals.css";

export const metadata = {
  title: "Bıçakcı Serkan",
  description: "Bıçakcı Serkan Bıçak Malzemeleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
