import Card from "@/components/Card";
import { useParams } from "react-router-dom";
import { useHistory } from "@/hooks/useHistory";
import { useEffect } from "react";
import { parseLinks } from "@/lib/parseLinks";
import TableRenderer from "@/features/events/components/TableRenderer";
import { getRuleDataByTag } from "../services/RuleService";
import Badge from "@/components/Badge";

function RuleDetail() {
  const { tag } = useParams();
  const rule = getRuleDataByTag(tag as string);
  const { addToHistory } = useHistory();

  useEffect(() => {
    if (!rule) return;

    addToHistory(rule.tag, rule.title);
  }, [addToHistory, rule]);

  if (!rule) return null;

  return (
    <Card title={rule.title} tag={rule.tag}>
      {rule.type && <Badge text={rule.type} icon={rule.type} />}
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
