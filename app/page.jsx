import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">famous quotes</span>
      </h1>
      <p className="desc text-center">
        Quotes library is an open-source tool to discover, create and share famous movie and TV quotes.
      </p>

      <Feed />

    </section>
  )
}

export default Home
