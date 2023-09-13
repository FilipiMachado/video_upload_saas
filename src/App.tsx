import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";

export function App() {
  return (
    <div>
      <div className="px-6 py-3 flex items-start justify-between border-b">
        <h1 className="text-xl font-bold">FaestialUp.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Developed with ❤️ by Fe Rodrigues</span>
          <Button variant={"outline"}>
            <Github />
            Github
          </Button>
        </div>
      </div>
    </div>
  )
}
