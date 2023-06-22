import ECell from "../assets/E.png";
export default function Home() {
  return (
    <section id="Home" className="font-Poppins bg-gray-900 bg-cover bg-fixed -z-10">
      <div className="flex items-center justify-center h-screen">
        <img src={ECell} className="w-2/3" alt="" />
      </div>
    </section>
  );
}
