export default function Home() {

  return (
    <main className="flex flex-col w-full">
      <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">Form Builder</h2>
        <div className="flex items-center gap-2">
          <button>Preview</button>
        </div>
      </nav>
      <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent">
        <div className="flex w-full h-full">
          <div className="p-4 w-full">
            <div className="bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto">
              <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
                Drop Here
              </p>
            </div>
          </div>
        </div>
        <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-1-2 border-muted p-4 bg-background overflow-y-auto h-full">
          Elements
        </aside>
      </div>
    </main>
  )
}
