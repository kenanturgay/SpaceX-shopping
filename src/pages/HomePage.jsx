import React from "react";

import PageContent from "../layout/PageContent";

import NewCollection from "../components/NewCollection";
import EditorsPick from "../components/EditorPick";
import BestSeller from "../components/BestSeller";

export default function HomePage() {
  return (
    <div className="">
      <PageContent>
        <NewCollection></NewCollection>
        <EditorsPick></EditorsPick>
        <BestSeller></BestSeller>
      </PageContent>
    </div>
  );
}
