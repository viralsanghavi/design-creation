import "@/styles/globals.css";
import MainLayout from "@/layout";
import PageHeader from "@/components/navbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <PageHeader />
      <Component {...pageProps} />
      <Footer />
    </MainLayout>
  );
}
