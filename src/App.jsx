import { useMediaQuery } from "react-responsive";
import {
  patternBackgroundDesktop,
  patternBackgroundMobile,
  minusIcon,
  plusIcon,
  starIcon,
} from "./assets/images";

const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <main className="bg-LightPink w-screen h-screen font-WorkSans flex flex-col items-center px-5">
      <figure
        className="w-screen min-h-[14.5rem]"
        style={{
          backgroundImage: `url("${
            isMobile ? patternBackgroundMobile : patternBackgroundDesktop
          }")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></figure>
      <section className="bg-White rounded-lg px-6 py-8 -mt-[6.55rem] max-w-xs">
        <h2 className="font-bold text-4xl">FAQs</h2>
        <details open>
          <summary>What is Frontend Mentor, and how will it help me?</summary>
          <p>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It&quot;s suitable for all levels and
            ideal for portfolio building.
          </p>
        </details>
        <details>
          <summary>Is Frontend Mentor free?</summary>
          <p>
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </p>
        </details>
        <details>
          <summary>Can I use Frontend Mentor projects in my portfolio?</summary>
          <p>
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It&quot;s an excellent way to showcase your skills to
            potential employers!
          </p>
        </details>
        <details>
          <summary>
            How can I get help if I&quot;m stuck on a Frontend Mentor challenge?
          </summary>
          <p>
            The best place to get help is inside Frontend Mentor&quot;s Discord
            community. There&quot;s a help channel where you can ask questions
            and seek support from other community members.
          </p>
        </details>
      </section>
    </main>
  );
};

export default App;
