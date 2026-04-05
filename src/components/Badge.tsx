import { getEmojiIcon, type EmojiType } from "@/lib/constants";
import React, { type ReactNode } from "react";

type BadgeProps = {
  text: string;
  icon?: string | ReactNode;
  variant?: "default" | "dark";
};

const Badge: React.FC<BadgeProps> = ({ text, icon, variant = "default" }) => {
  const variantStyles = variant === "default" ? "bg-dark-grey" : "bg-black";

  return (
    <span
      className={`rounded text-md text-bold text-white py-1 px-2 mb-1 mr-1 ${variantStyles}`}
    >
      {icon && <span className="mr-1">{getEmojiIcon[icon as EmojiType]}</span>}
      {text ? text.charAt(0).toUpperCase() + text.slice(1) : ""}
    </span>
  );
};

export default Badge;
