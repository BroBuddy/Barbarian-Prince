import React from "react";

export function parseEventCell(cell: string) {
  return cell.split("—").map((part, index, arr) => {
    const trimmed = part.trim();
    const firstToken = trimmed.split(" ")[0].toUpperCase();
    const isEventLink = firstToken.startsWith("E") && firstToken.length === 4;

    const element = isEventLink ? (
      <a
        key={index}
        href={`/event/${firstToken.toLowerCase()}`}
        className="text-blue-500 underline px-1"
      >
        {trimmed}
      </a>
    ) : (
      <span key={index} className="px-1">
        {trimmed}
      </span>
    );

    if (index < arr.length - 1) {
      return (
        <React.Fragment key={index}>
          {element} <span>—</span>
        </React.Fragment>
      );
    }

    return element;
  });
}
