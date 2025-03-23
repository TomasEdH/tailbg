const Bg1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
  );
};

const Bg2 = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,blue_100%)]"></div>
    </div>
  );
};

const Bg3 = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute h-full w-full inset-0 -z-10 bg-gradient-to-r from-slate-500 to-slate-800 "></div>
    </div>
  );
};

const Bg4 = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </div>
  );
};

const Bg5 = () => {
  return (
    <div className="relative h-full w-full bg-gray-800">
      <div className="absolute inset-0 z-[-2] h-full w-full bg-neutral-900 bg-[radial-gradient(ellipse_85%_85%_at_50%_-15%, rgba(79,70,229,0.3), rgba(255,255,255,0))]"></div>
    </div>
  );
};

const Bg6 = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const Bg7 = () => {
  return (
    <div className="relative w-full h-full -z-10">
      <div className="absolute inset-0 h-full w-full bg-[#080808] bg-[repeating-linear-gradient(0deg,#111_0px,#111_1px,transparent_1px,transparent_51px),repeating-linear-gradient(90deg,#111_0px,#111_1px,transparent_1px,transparent_51px)]"></div>
    </div>
  );
};
const Bg8 = () => {
  return (
    <div className="relative w-full h-full -z-10">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500 to-white">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 bg-[radial-gradient(circle at center, rgba(20,184,166,0.8), transparent)] rounded-full"></div>
      </div>
    </div>
  );
};
const Bg9 = () => {
  return <div className="absolute top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_75%_75%_at_40%_-10%,rgba(200,50,150,0.3),rgba(0,0,0,0))]" />;
};
const Bg10 = () => {
  return <div className="absolute top-0 -z-10 h-full w-full bg-neutral-50 bg-[radial-gradient(ellipse_90%_90%_at_60%_10%,rgba(255,255,150,0.2),rgba(255,255,255,0))]" />;
};

export const BACKGROUNDS = [
  {
    id: 1,
    name: "bg1",
    component: <Bg1 />,
    theme: "light", // Tema claro
  },
  {
    id: 2,
    name: "bg2",
    component: <Bg2 />,
    theme: "light", // Tema oscuro
  },
  {
    id: 3,
    name: "bg3",
    component: <Bg3 />,
    theme: "dark",
  },
  {
    id: 4,
    name: "bg4",
    component: <Bg4 />,
    theme: "dark",
  },
  {
    id: 5,
    name: "bg5",
    component: <Bg5 />,
    theme: "dark",
  },
  {
    id: 6,
    name: "bg6",
    component: <Bg6 />,
    theme: "dark",
  },
  {
    id: 7,
    name: "bg7",
    component: <Bg7 />,
    theme: "dark",
  },
  {
    id: 8,
    name: "bg8",
    component: <Bg8 />,
    theme: "light",
  },
  {
    id: 9,
    name: "bg9",
    component: <Bg9 />,
    theme: "dark",
  },
  {
    id: 10,
    name: "bg10",
    component: <Bg10 />,
    theme: "light",
  },
] as const;
