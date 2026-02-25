import React from "react";
import { Button } from "./ui/button";
import { Play, RefreshCw, Save } from "lucide-react";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  onReset: () => void;
  onSave?: () => void;
  isRunning?: boolean;
  language?: "html" | "css" | "javascript";
}

export function CodeEditor({ 
  code, 
  onChange, 
  onRun, 
  onReset, 
  onSave,
  isRunning = false,
  language = "html"
}: CodeEditorProps) {
  return (
    <div className="flex flex-col h-full bg-[#1E1E1E]">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 bg-[#1E1E1E]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 uppercase font-mono">{language}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={onReset} 
            title="Reset"
            className="text-slate-400 hover:text-white h-8"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          {onSave && (
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={onSave} 
              title="Save"
              className="text-slate-400 hover:text-white h-8"
            >
              <Save className="h-4 w-4" />
            </Button>
          )}
          <Button 
            size="sm" 
            onClick={onRun} 
            disabled={isRunning}
            className="bg-[#22C55E] hover:bg-green-600 text-white h-8 px-3"
          >
            <Play className="mr-1.5 h-3 w-3 fill-current" /> 
            {isRunning ? 'Running...' : 'Run'}
          </Button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Line Numbers */}
        <div className="w-12 bg-[#1E1E1E] border-r border-slate-800 flex flex-col py-4 pr-3 text-right text-slate-600 font-mono text-sm select-none overflow-hidden">
          {code.split('\n').map((_, i) => (
            <div key={i} className="leading-6">{i + 1}</div>
          ))}
        </div>

        {/* Code Input */}
        <textarea 
          className="flex-1 h-full bg-[#1E1E1E] text-slate-300 font-mono text-sm p-4 resize-none focus:outline-none leading-6"
          value={code}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          placeholder={`// Start coding ${language} here...`}
        />
      </div>
    </div>
  );
}
