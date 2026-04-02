import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export function parseLinks(text: string): React.ReactNode {
  const parts = text.split(/([Ee]\d{3,4})/g);

  return parts.map((part, i) =>
    /^[Ee]\d{3,4}$/.test(part) ? (
      <Link key={i} to={`/event/${part.toLowerCase()}`}>
        {part}
      </Link>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
