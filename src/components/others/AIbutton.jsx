import React, { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { toast } from "sonner";

const AIbutton = ({ title, onSendData }) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!API_KEY) {
      toast.error("API key not found!");
      return;
    }
  }, [API_KEY]);

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  const handleClick = async () => {
    // check if the title is empty
    if (!title) {
      toast.warning("Please input title first.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Create a JSON object for this task: "${title}". Describe the task in description.
           Strictly use this format: 
           {
             "description": "text here",
             "category": "text here"
           }`,
      });
      setResponse(result.text);
      onSendData(result.text);
    } catch (error) {
      console.log("Gemini API Error:", error);
      setResponse(
        "Error: Could not get response from AI. Check console for details.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        title="Generate Description & Category"
        onClick={handleClick}
        disabled={loading}
        className="
          px-5 py-2 rounded-full text-sm font-semibold tracking-wide
          text-fuchsia-300 border border-fuchsia-500/50
          bg-fuchsia-500/10
          shadow-[0_0_0px_rgba(217,70,239,0)]
          hover:bg-fuchsia-500/20
          hover:border-fuchsia-400
          hover:shadow-[0_0_18px_rgba(217,70,239,0.5)]
          hover:text-fuchsia-200
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none
          transition-all duration-300 cursor-pointer
        "
      >
        {loading ? "✦ Generating..." : "✦ Generate"}
      </button>
    </div>
  );
};

export default AIbutton;
