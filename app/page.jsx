import Feed from "../components/Feed";



const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptify is an AI tool for quickly creating high-quality prompts,
        enhancing creativity and streamlining AI-driven projects.
      </p>

      {/**feed */}
      <Feed />
    </section>
  );
};

export default Home;
