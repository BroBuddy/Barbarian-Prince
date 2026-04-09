import Card from "@/components/Card";
import { Link } from "react-router-dom";
import type { RuleItem } from "../types/RuleType";
import { useRuleService } from "../services/RuleService";

function RuleDetailPage() {
  const { getRuleData } = useRuleService();
  const rules: RuleItem[] = getRuleData();

  if (!rules) return null;

  return (
    <Card title="Rules">
      <div className="flex flex-wrap gap-3">
        {rules.map((item) => {
          return (
            <div key={item.tag} className="mx-2 w-4">
              <Link to={`/rule/${item.tag}`}>{item.tag.toUpperCase()}</Link>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default RuleDetailPage;
