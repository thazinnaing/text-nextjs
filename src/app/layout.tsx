
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between h-screen w-full">
        <header className="bg-blue-400 h-20">
          <p>headers</p>
        </header>
        <div className="bg-green-400 h-40">
          {children}
        </div>
        <footer className="bg-blue-400 h-20">
          This is my footer
        </footer>
      </body>
    </html>
  );
}

