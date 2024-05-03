import AboutMe from "./components/AboutMe";
import RepoSection from "./components/RepoSection";
import ContactBar from "./components/ContactBar";
import bg1 from "../public/bg1.png";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{ backgroundImage: `url(${bg1.src})` }}
    >
      <AboutMe />
      <ContactBar />
      <RepoSection />
    </main>
  );
}
