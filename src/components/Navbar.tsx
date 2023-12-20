import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-3 md:p-8">
      <Link href="/">
        <Image
          src="/images/rovier1.png"
          height={100}
          width={100}
          alt="Navbar Logo"
          className="h-7 w-36 md:h-8"
        />
      </Link>

      <button
        type="button"
        className="w-max items-center ml-auto flex-initial bg-transparent group border border-black inter text-xs uppercase tracking-widest hover:border-primary-900 text-black rounded-lg h-10 px-5 text-center inline-flex transition-all ease-in-out"
      >
        <p>Contact</p>
        <svg
          className="group-hover:translate-x-1.5 transition-all ease-in-out rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="#205264"
            className="group-hover:stroke-primary-900"
            stroke-linecap="round"
            strokeLinejoin="round"
            stroke-width="1"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
