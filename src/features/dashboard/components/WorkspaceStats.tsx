import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui';
import OverviewInsightPanel from './OverviewInsightPanel';

export default function WorkspaceStats() {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-4 @md/card-wrapper:grid-cols-2 @3xl/card-wrapper:grid-cols-3 @5xl/card-wrapper:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              <span>{Math.floor(Math.random() * 500)}</span>{' '}
              <span className="text-accent-foreground text-sm font-normal">
                Chats
              </span>
            </CardTitle>
            <CardDescription className="text-xs">
              Messages per agent (avg)
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              <span>{Math.floor(Math.random() * 500)}</span>{' '}
              <span className="text-accent-foreground text-sm font-normal">
                Credits
              </span>
            </CardTitle>
            <CardDescription className="text-xs">
              Total credit used
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              <span>{Math.floor(Math.random() * 500)}</span>{' '}
              <span className="text-accent-foreground text-sm font-normal">
                Credits
              </span>
            </CardTitle>
            <CardDescription className="text-xs">
              Avg. Cost/per agent
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              <span>3</span>{' '}
              <span className="text-accent-foreground text-sm font-normal">
                Agents
              </span>
            </CardTitle>
            <CardDescription className="text-xs">
              Number of agents
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <OverviewInsightPanel />
    </>
  );
}
