import ReactDOMServer from "react-dom/server";
import { PreviewIcon, CopyIcon } from "./icons/Icons.jsx";
import { toast } from "sonner";

type PreviewProps = {
  children: React.ReactElement;
  setPreview: (value: React.ReactNode) => void;
  setTheme: (theme: "light" | "dark") => void;
  theme: "light" | "dark";
};

export default function Preview({
  children,
  setPreview,
  theme,
  setTheme,
}: PreviewProps) {
  const handlePreview = () => {
    setPreview(children);
    setTheme(theme);
    console.log(theme);
  };

  const handleCopy = () => {
    const code = ReactDOMServer.renderToString(children);
    console.log(code);
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
      <div className="absolute right-4 bottom-4 z-10 cursor-pointer">
        <div className="flex flex-row gap-4">
          <button
            className=" rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
            onClick={() => {
              handlePreview();
            }}
          >
            <PreviewIcon />
          </button>
          <div
            className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
            onClick={() => {
              handleCopy();
              toast.success("Copiado al portapapeles");
            }}
          >
            <CopyIcon />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
