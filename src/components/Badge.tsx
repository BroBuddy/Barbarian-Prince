import type { RuleType } from "@/features/rule/types/RuleType";
import { ruleTypeEmoji } from "@/lib/Helper";
import React from "react";

type BadgeProps = {
  text: string;
  icon?: string;
  variant?: "default" | "dark";
};

const Badge: React.FC<BadgeProps> = ({ text, icon, variant = "default" }) => {
  const variantStyles = variant === "default" ? "bg-dark-grey" : "bg-black";

  return (
    <span
      className={`rounded text-md text-bold text-white py-1 px-2 mb-1 mr-1 ${variantStyles}`}
    >
      {icon && <span className="mr-1">{ruleTypeEmoji[icon as RuleType]}</span>}
      {text ? text.charAt(0).toUpperCase() + text.slice(1) : ""}
    </span>
  );
};

export default Badge;
