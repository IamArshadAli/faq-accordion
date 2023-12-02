const App = () => {
  return (
    <main className="main">
      <figure className="main__background"></figure>
      <section className="card">
        <div className="card__header">
          <figure className="header__icon"></figure>
          <h2 className="header__title">FAQs</h2>
        </div>
        {/* FAQs */}
        <details open className="faq group">
          <summary className="faq__question">
            What is Frontend Mentor, and how will it help me?
          </summary>
          <p className="faq__answer">
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It&apos;s suitable for all levels and
            ideal for portfolio building.
          </p>
        </details>

        <hr className="faq__divider" />

        <details className="faq group">
          <summary className="faq__question">Is Frontend Mentor free?</summary>
          <p className="faq__answer">
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </p>
        </details>

        <hr className="faq__divider" />

        <details className="faq group">
          <summary className="faq__question">
            Can I use Frontend Mentor projects in my portfolio?
          </summary>
          <p className="faq__answer">
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It&apos;s an excellent way to showcase your skills to
            potential employers!
          </p>
        </details>

        <hr className="faq__divider" />

        <details className="faq group md:mt-7">
          <summary className="faq__question">
            How can I get help if I&apos;m stuck on a challenge?
          </summary>
          <p className="faq__answer">
            The best place to get help is inside Frontend Mentor&apos;s Discord
            community. There&apos;s a help channel where you can ask questions
            and seek support from other community members.
          </p>
        </details>
      </section>
    </main>
  );
};

export default App;
