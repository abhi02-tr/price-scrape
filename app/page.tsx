import HeroCarousal from "@/components/HeroCarousal";
import Searchbar from "@/components/Searchbar";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Start Here:

            </p>
            <h1 className="head-text">
              Unleash The Power Of
              <span className="underline"> Price<span className="text-primary">Scrape</span></span>
            </h1>

            <Searchbar />
          </div>

          <HeroCarousal />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {/* product names */}
        </div>
      </section>
    </>
  )
}

export default Home;