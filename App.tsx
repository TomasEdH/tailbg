import React, { useState } from "react";
import { BACKGROUNDS } from "./Background";
import Header from "./Header";
import Preview from "./Preview";
import { Toaster } from "sonner";

function App() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  console.log(theme);
  return (
    <>
      <div className="flex justify-center bg-black">
        <header className="mt-6 opacity-70 fixed">
          Made by Tomas Estrada | 2024
        </header>
      </div>
      <main className="mt-10 max-w-full h-screen mx-10 flex">
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>
        <div className="fixed left-0 top-0 w-1/2 h-full flex justify-center items-center">
          <Header setPreview={setPreview} theme={theme} />
        </div>
        <Toaster/>
        <div className="ml-[50%] w-1/2 h-screen ">
          <section className="overflow-hidden px-4 pb-20 mt-20">
            <div className="grid grid-cols-2 gap-4">
              {BACKGROUNDS.map(({ component, theme }, index) => {
                return (
                  <Preview setPreview={setPreview} key={index} theme={theme} setTheme={setTheme}> 
                    {component}
                  </Preview>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>

    
  );
}

export default App;

/*
return (
    <main className="mt-40 max-w-full mx-10 grid grid-cols-2">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {preview ? preview : null}
      </div>
      <div className="flex justify-center items-center">
        <Header />
      </div>

      <section className="overflow-hidden px-4 pb-20 mt-20">
        <div className="grid grid-cols-2 gap-4">
          {BACKGROUNDS.map(({ component }, index) => {
            return (
              <Preview setPreview={setPreview} key={index}>
                {component}
              </Preview>
            );
          })}
        </div>
        <div onClick={handleReset} className="fixed bottom-10 right-10">
          <Reload />
        </div>
      </section>
    </main>
  ); */
