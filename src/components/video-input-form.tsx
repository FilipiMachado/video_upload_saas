import { FileVideo, Upload } from "lucide-react";

import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";

export const VideoInputForm = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const promptInputRef = useRef<HTMLTextAreaElement>(null);

  function handleFileSelected(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.currentTarget;

    if (!files) {
      return;
    }

    const selectedFile = files[0];

    setVideoFile(selectedFile);
  }

  function handleVideoUpload(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const prompt = promptInputRef.current?.value;

    if (!videoFile) {
      return
    }

    // convert video in audio
    
  }

  const previewUrl = useMemo(() => {
    if (!videoFile) {
      return null;
    }

    return URL.createObjectURL(videoFile);
  }, [videoFile]);

  return (
    <form onSubmit={handleVideoUpload} action="space-y-6">
      <label
        htmlFor="video"
        className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/80 transition"
      >
        {videoFile ? (
          <video
            src={previewUrl || ""}
            controls={false}
            className="pointer-events-none absolute inset-0"
          />
        ) : (
          <>
            <FileVideo className="w-6 h-6" />
            Select video
          </>
        )}
      </label>

      <input
        type="file"
        id="video"
        accept="video/mp4"
        className="sr-only"
        onChange={handleFileSelected}
      />

      <Separator />

      <div className="space-y-2 mt-2">
        <Label htmlFor="transcription_prompt">Transcription prompt</Label>
        <Textarea
          ref={promptInputRef}
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
        />
      </div>

      <Button type="submit" className="w-full">
        Upload video
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
};
