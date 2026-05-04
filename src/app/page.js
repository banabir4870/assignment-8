import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";

export const metadata = {
  title: "Qurbani Hat | Home",
  description: "",
};

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <TopBreeds></TopBreeds>
      <QurbaniTips></QurbaniTips>
    </div>
  );
}
