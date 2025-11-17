import { Document, SendAlt, Upload } from "@carbon/icons-react";
import ButtonIcon from "./ButtonIcon";
import SquareButtons from "./SquareButtons";
import { useState } from "react";

function QuestionForm() {
  const [modelValue, setModelValue] = useState("4o-latest");

  return (
    <form className="mt-auto p-6 border border-border rounded-lg shadow-md">
      <div className="overflow-y-scroll no-scrollbar">
        <textarea
          type="text"
          placeholder="Ask questions..."
          className="w-full h-30 outline-none placeholder:text-2xl text-2xl resize-none no-scrollbar max-phone-lg:text-3xl max-phone-lg:placeholder:text-3xl"></textarea>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ButtonIcon icon={<Upload size={18} />} />
          <SquareButtons
            icon={<Document size={16} fill="var(--color-accent-400)" />}
            styles="p-2 bg-accent-25 border border-accent-100 rounded-sm cursor-pointer"
          />
        </div>
        <div className="flex items-center divide-x divide-solid divide-border">
          <div className="pr-4">
            <select
              name="modelSelection"
              id="model-selection"
              value={modelValue}
              onChange={(e) => setModelValue(e.target.value)}
              className="p-2 rounded-md border-r-8 border-transparent outline outline-border text-2xl cursor-pointer max-phone-lg:p-3 max-phone-sm:border-r-4">
              <option value="4o-latest">GPT-4o (Latest)</option>
              <option value="3">GPT-3</option>
            </select>
          </div>
          <div className="pl-4">
            <SquareButtons
              icon={<SendAlt size={18} fill="var(--color-background-1)" />}
              styles="p-2 bg-tag-1 rounded-md cursor-pointer"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default QuestionForm;
