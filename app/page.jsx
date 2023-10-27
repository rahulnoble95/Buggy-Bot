import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
      Find & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> BuggyBot

</span>
      </h1>
      <p className="desc text-center">
      BuggyBot Prompto is an open-source AI prompting tool
for the modern world, powered by BuggyBot, enabling you to discover, create, and share
innovative prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;

