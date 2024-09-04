import "@/styles/globals.css";

export const metadata = {
  title: "Selena Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto py-4 max-w-4xl">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
