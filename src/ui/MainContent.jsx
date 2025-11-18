import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Document } from "@carbon/icons-react";

import { formatDateAndTime } from "../helpers/formatDateAndTime";

import HeaderMain from "./HeaderMain";
import Spinner from "./Spinner";
import EmptyMainWorkspace from "./EmptyMainWorkspace";
import SquareButtons from "./SquareButtons";
import QuestionForm from "./QuestionForm";
import Disclaimer from "./Disclaimer";
import KeyHighlightNumberTag from "./KeyHighlightNumberTag";

function MainContent() {
  const { openProjectId } = useSelector((state) => state.ui);

  const selectAllProjects = (state) => state.projects.projects;

  const selectOpenProject = createSelector([selectAllProjects], (projects) => {
    return projects.filter((project) => project.id === openProjectId).at(0);
  });

  const openProject = useSelector(selectOpenProject);
  const { status: projectDataStatus, error } = useSelector(
    (state) => state.projects
  );

  if (!openProjectId) return <EmptyMainWorkspace />;
  if (projectDataStatus === "failed") return <Error message={error} />;

  let numericHighlight = 0;

  return (
    <>
      <HeaderMain project={openProject} />
      <main className="row-start-2 row-span-1 col-start-2 col-span-1 w-290 self-stretch overflow-hidden mt-10 mx-auto flex flex-col gap-10 max-phone-lg:w-screen max-phone-lg:px-14 max-phone-lg:mt-12 max-phone-sm:px-10">
        <div className="flex flex-col gap-10 overflow-y-scroll no-scrollbar">
          <h4 className="text-3xl text-text-primary font-semibold tracking-wide max-phone-lg:text-4xl">
            {openProject.headline}
          </h4>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-text-helper text-lg max-phone-lg:text-xl">
                Answered with:
              </span>
              <span className="text-lg px-4 py-2 rounded-md border border-border max-phone-lg:text-xl max-phone-lg:py-2.5">
                {openProject.modelUsed}
              </span>
              <SquareButtons
                icon={<Document size={16} fill="var(--color-accent-400)" />}
                styles="px-2 py-2 rounded-md border border-border cursor-pointer"
              />
            </div>
            <span className="text-xl text-text-helper max-phone-lg:text-2xl">
              {formatDateAndTime(openProject.date, "time")}
            </span>
          </div>

          <div className="p-3 rounded-lg border border-border bg-background-4 flex flex-col gap-4">
            <h4 className="text-2xl font-semibold max-phone-lg:text-3xl">
              Summary
            </h4>
            <p className="text-xl tracking-wider max-phone-lg:text-2xl">
              {openProject.summary}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold max-phone-lg:text-3xl">
              Key Highlights
            </h3>
            <ul className="flex flex-col gap-2 list-outside list-disc ml-6 max-phone-lg:gap-3">
              {openProject.keyHighlights.map((highlight) => {
                if (/\d/.test(highlight)) {
                  numericHighlight++;
                  return (
                    <li className="ml-4" key={highlight}>
                      <p className="text-2xl max-phone-lg:text-3xl">
                        {highlight}
                        {/\d/.test(highlight) && (
                          <KeyHighlightNumberTag>
                            {numericHighlight}
                          </KeyHighlightNumberTag>
                        )}
                      </p>
                    </li>
                  );
                }
                return (
                  <li className="ml-4" key={highlight}>
                    <p className="text-2xl max-phone-lg:text-3xl leading-[1.2]">
                      {highlight}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <QuestionForm />

        <Disclaimer />
      </main>
    </>
  );
}

export default MainContent;
