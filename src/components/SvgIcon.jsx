import React from "react";

const SvgIcon = ({ svgData, fillColor }) => {
  // Parse the SVG string only once on component creation
  const parser = new DOMParser();
  // Treat SVG as HTML for parsing
  const svgDocument = parser.parseFromString(svgData, "text/html");
  const svgElement = svgDocument.querySelector("svg");

  // Handle potential parsing errors
  if (!svgElement) {
    return;
  }

  // Access the JSX representation of the parsed element
  const svgJsx = svgElement.outerHTML;

  return (
    <svg
      fill={fillColor}
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      className="h-14 w-14"
      dangerouslySetInnerHTML={{ __html: svgJsx }}
    />
  );
};

export default SvgIcon;
