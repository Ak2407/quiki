"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

const UpdateForm = () => {
  const [title, setTitle] = useState("Scary Stories");
  const [caption, setCaption] = useState(
    "Dive into Emma's spine-tingling adventure as she faces the shadows lurking in",
  );
  const [script, setScript] = useState(
    "This haunted tale will keep you up at night, trembling under your blankets. In the darkness of the old house, something sinister lurks—a whisper in the shadows that beckons the unwary. Emma, our brave protagonist, stumbled upon this decrepit structure during her search for peace. Instead, she found only chilling silence and the scent of decay. As she stepped inside, the floorboards creaked beneath her weight as if protesting her intrusion. The air turned ice-cold, wrapping around her like a suffocating shroud. A portrait hung crookedly on the wall; its eyes seemed to follow her every move. Emma",
  );

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          TITLE
        </label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-1"
        />
        <div className="text-right text-sm text-muted-foreground">13 / 100</div>
      </div>

      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          CAPTION
        </label>
        <Input
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="mb-1"
        />
        <div className="text-right text-sm text-muted-foreground">
          197 / 200
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          SCRIPT
        </label>
        <Textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          className="min-h-[200px] mb-1"
        />
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span className="text-blue-500">
            Note: We recommend to verify AI generated scripts for accuracy.
          </span>
          <span>1079 / 1200</span>
        </div>
      </div>

      <Button className="w-full bg-blue-500 hover:bg-blue-600">
        Update Video
      </Button>
    </div>
  );
};

export default UpdateForm;
