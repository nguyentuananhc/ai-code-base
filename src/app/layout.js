import { Inter } from "next/font/google";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Provider from "@components/Provider";
import Notice from "@components/Notice";
import { Providers as UIProvider } from "@components/UIProvider";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <UIProvider>
            <Notice />
            <main className="app">
              <NavBar />
              {children}
              <Footer />
            </main>
          </UIProvider>
        </Provider>
      </body>
    </html>
  );
}
