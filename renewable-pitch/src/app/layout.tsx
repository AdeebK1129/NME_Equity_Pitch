import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Renewable Pitch",
  description: "A platform for renewable energy equity pitches.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 font-sans">
        <Navbar />
        <main className="mt-4">{children}</main>
      </body>
    </html>
  );
}
