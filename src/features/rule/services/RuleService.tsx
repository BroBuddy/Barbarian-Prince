import { ruleData } from "../data/ruleData";
import type { Rule, RuleItem } from "../types/RuleType";

const getRuleData = (): RuleItem[] => {
  if (!ruleData) return [];

  return ruleData.map(({ tag, title }) => ({
    tag,
    title,
  }));
};

const getRuleDataByTag = (tag: string): Rule | undefined => {
  return ruleData.find((item: Rule) => item.tag === tag) as Rule;
};

export { getRuleData, getRuleDataByTag };
