import React from "react";
import CardComponent from "../components/CardComponent";

export default function UiComponents() {
  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6">
        <CardComponent />
        <CardComponent /> 
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}
