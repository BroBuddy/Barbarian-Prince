import { ruleData } from "../data/ruleData";
import type { Rule, RuleItem } from "../types/RuleType";

const getRuleData = (): RuleItem[] => {
  return ruleData.map(({ tag, title }) => ({
    tag,
    title,
  }));
};

const getRuleDataByTag = (tag: string): Rule => {
  return ruleData.find((item: Rule) => item.tag === tag) as Rule;
};

export { getRuleData, getRuleDataByTag };
