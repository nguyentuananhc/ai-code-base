import { Inter } from "next/font/google";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Provider from "@components/Provider";
import Notice from "@components/Notice";
import { Providers as UIProvider } from "@components/UIProvider";
import { ReduxProvider } from "@redux/provider";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Song Generator",
  description: "AI Song Generator",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ReduxProvider>
          <Provider>
            <UIProvider>
              <Notice />
              <main className="mt-[150px] app">
                <NavBar />
                {children}
                <Footer />
              </main>
            </UIProvider>
          </Provider>
        </ReduxProvider>
      </body>
    </html>
  );
}
