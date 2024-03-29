import aboutImg from "../assets/tent-on-van.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="flex-grow bg-orange-50 ">
      <img
        src={aboutImg}
        alt="Man sitting on the roof of a van"
        className="mx-auto my-0 w-full"
      />
      <section className="px-7 py-12 font-inter">
        <h1 className="text-3xl font-bold text-black-910">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <article className="mt-8 text-base font-medium">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are re-certified before each trip to ensure your
            travel plans can go off without a hitch.
            <br /> (Hitch costs extra 😉)
          </p>
          <br />
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </article>
        <section className="mt-14 rounded bg-orange-120 px-8 py-9 font-inter">
          <h2 className="mb-6 self-center text-2xl font-bold">
            Your destination is waiting.
            <br /> Your van is ready.
          </h2>
          <Link
            className="rounded-lg bg-black-910 px-5 py-3 text-base font-bold text-white"
            to={"/vans"}
          >
            Explore our vans
          </Link>
        </section>
      </section>
    </main>
  );
}

export default About;
