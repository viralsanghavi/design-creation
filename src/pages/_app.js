import Footer from "@/components/footer";
import PageHeader from "@/components/navbar";
import BarWithBall from "@/components/pre-loader";
import MainLayout from "@/layout";
import "@/styles/globals.css";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";

export default function App({Component, pageProps}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  if (loading) return <BarWithBall />;
  return (
    <MainLayout>
      <PageHeader />
      <Component {...pageProps} />
      <Footer />
    </MainLayout>
  );
}
