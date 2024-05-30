import { SiteLogo } from "../../shared/assets/SiteLogo";

function Divisor() {
  return (
    <section className="w-full h-16 md:h-[72px] flex items-center">
      <div className="bg-borderColor w-full h-[1px] flex items-center justify-center relative">
        <button
          title="Calculate the difference between two dates"
          aria-label="Click here to calculate the difference between two dates"
          type="submit"
          className="w-16 md:w-24 h-16 md:h-24 p-4 md:p-6 rounded-full bg-circle hover:bg-black flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 md:right-0 transition"
        >
          <SiteLogo />
        </button>
      </div>
    </section>
  );
}

export { Divisor };
