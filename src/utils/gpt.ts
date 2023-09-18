import type { Task } from "../types/Task";

let uri = "https://api.ai21.com/studio/v1/j2-ultra/complete";
let token = "OA6FRXUU6lln8U1jKldXZ2jtcyaplKl0";
let promptPrefix = 
`Your mission is to accept a task descriptions and break it down into smaller task units.
Answer with markdown and write each task in a new line.
If a task unit includes multiple logical steps or elements, break it down to separate task units.
Pay close attention to details such as targets, dates, and requirements.
Each task unit must begin with an asterisk, and then the task unit's description.
Your input is between <input-start> and <input-end>.`;

export let taskBreakdown = async (prompt: string): Promise<Task[]> => {
    let headers: Headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Bearer ${token}`);

    let body: string = JSON.stringify({
        prompt: `${promptPrefix}\n<input-start>${prompt}<input-end>`,
        numResults: 1,
        epoch: 0,
        maxTokens: 400,
        temperature: 0,
        topKReturn: 0,
        topP: 1,
        presencePenalty: {
            scale: 0,
            applyToNumbers: true,
            applyToPunctuations: true,
            applyToStopwords: true,
            applyToWhitespaces: true,
            applyToEmojis: true
          },
          countPenalty: {
              scale: 0,
              applyToNumbers: true,
              applyToPunctuations: true,
              applyToStopwords: true,
              applyToWhitespaces: true,
              applyToEmojis: true
          },
          frequencyPenalty: {
              scale: 0,
              applyToNumbers: true,
              applyToPunctuations: true,
              applyToStopwords: true,
              applyToWhitespaces: true,
              applyToEmojis: true
          },
          stopSequences: []
    })

    let request = new Request(uri, {
        method: "POST",
        headers,
        body,
    });

    let raw = await (await fetch(request)).json();
    return rawBreakdownToTasks(raw["completions"][0].data.text);
}

let rawBreakdownToTasks = (raw: string): Task[] => raw.split("\n")
        .map(sanitizeRawTask)
        .filter((rawTask: string) => !!rawTask.trim())
        .map((rawTask: string): Task => ({
            title: rawTask,
            state: "In-Progress",
            tags: [],
        }));

let sanitizeRawTask = (rawTask: string): string => {
    if (rawTask.startsWith("* ")) {
        return rawTask.replace("* ", "");
    }
    return rawTask
}