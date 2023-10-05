import Banner from "@components/Home/Banner";
import HowTo from "@components/Home/HowTo";
import Feature from "@components/Home/Feature";
import Trending from "@components/Home/Trending";
import TrustedBy from "@components/Home/TrustedBy";
import BottomBanner from "@components/Home/BottomBanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Banner />
      <HowTo />
      <Feature />
      <Trending />
      <TrustedBy />
      <BottomBanner />
    </div>
  );
}
