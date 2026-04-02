import Card from "@/components/Card";
import { useParams } from "react-router-dom";
import { useHistory } from "@/hooks/useHistory";
import { useEffect } from "react";
import { parseLinks, ruleTypeEmoji } from "@/lib/Helper";
import TableRenderer from "@/features/events/components/TableRenderer";
import { getRuleDataByTag } from "../services/RuleService";
import type { Rule } from "../types/RuleType";

function RuleDetail() {
  const { tag } = useParams();
  const rule: Rule = getRuleDataByTag(tag as string);
  const { addToHistory } = useHistory();

  useEffect(() => {
    addToHistory(rule.tag, rule.title);
  }, [addToHistory, rule]);

  if (!rule) return null;

  return (
    <Card title={`${ruleTypeEmoji[rule.type]} ${rule.title}`} tag={rule.tag}>
      {rule.desc && <p>{parseLinks(rule.desc as string)}</p>}

      {rule.tables?.map((table, index) => (
        <TableRenderer key={index} table={table} />
      ))}

      {rule.note && (
        <p>
          <em>
            <span className="text-purple mr-1">Important Note:</span>
            {parseLinks(rule.note as string)}
          </em>
        </p>
      )}
    </Card>
  );
}

export default RuleDetail;
