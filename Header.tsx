import { Reload } from "./icons/Icons.tsx";

type HeaderProps = {
  setPreview: (value: React.ReactNode) => void;
  theme: "light" | "dark";
};

export default function Header({ setPreview, theme }: HeaderProps) {
  const handleReset = () => {
    setPreview(null);
  };
  return (
    <header className={theme === "dark" ? "text-white" : "text-black"}>
      <div className="flex items-center gap-6 mb-5">
        <h1 className="text-6xl">
          back<span className="text-blue-500">.tail</span>
        </h1>
        <div className="inline-flex items-center justify-center px-6 py-1 text-sm text-white bg-blue-500 rounded-full backdrop-blur-3xl whitespace-nowrap">
          Código abierto
        </div>
      </div>
      <h2 className="text-2xl">
        Encuentra aquí <span className="font-semibold">fondos modernos</span>{" "}
        para apps modernas.
      </h2>
      <h3 className="opacity-75">
        Diseñados para uso libre con código gratis para tu proxima pagina web
        con <span className="text-blue-500 font-semibold">Tailwind</span>.
      </h3>

      <div className="flex items-center gap-2">
        <a className="text-white mt-3 bg-[#24292F] hover:bg-[#20252b] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   me-2 mb-2 cursor-pointer">
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd"
            />
          </svg>
          Ver en GitHub
        </a>
        <a
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          Más proyectos
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <button onClick={handleReset}>
          <Reload />
        </button>
      </div>
    </header>
  );
}
