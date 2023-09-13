import { FileVideo, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-start justify-between border-b">
        <h1 className="text-xl font-bold">FaestialUp.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed with ❤️ by Fe Rodrigues
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex flex-1 p-6 gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="border-sm resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="border-sm resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: Você pode utilizar a variável{" "}
            <code className="text-violet-400 bg-slate-800">
              {"{transcription}"}
            </code>{" "}
            no seu prompt para adicionar o conteudo da transcrição do seu video
            selecionado.
          </p>
        </div>

        <aside className="w-80 border border-slate-800 space-y-6">
          <form action="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/80 transition"
            >
              <FileVideo className="w-6 h-6"/>
              Upload video
            </label>

            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-1">

            </div>
          </form>

          <form action="">2</form>
        </aside>
      </main>
    </div>
  );
}
