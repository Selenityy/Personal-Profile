import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "Selena Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto py-4 max-w-4xl">
          <Header />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
