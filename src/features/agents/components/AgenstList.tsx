'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import {
  Ban,
  BotMessageSquare,
  Edit,
  Ellipsis,
  Info,
  Trash2,
} from '@/components/icons';

interface Agent {
  id: number;
  agentName: string;
  status: 'active' | 'deactivate';
  sources: string[];
  createdAt: string;
}

const agentsData: Agent[] = [
  {
    id: 1,
    agentName: 'ChatBot Assistant',
    status: 'active',
    sources: ['API', 'Database', 'Youtube Video', 'Files', 'API'],
    createdAt: '19 Jun 2025, 03:02',
  },
  {
    id: 2,
    agentName: 'Customer Support AI',
    status: 'deactivate',
    sources: ['API', 'Knowledge Base', 'Website'],
    createdAt: '19 Jun 2025, 03:02',
  },
  {
    id: 3,
    agentName: 'Data Analyzer',
    status: 'active',
    sources: ['Database', 'CSV', 'API'],
    createdAt: '19 Jun 2025, 03:02',
  },
];

export default function AgenstList() {
  const handleView = (agent: Agent) => {
    console.log('View agent:', agent);
  };

  return (
    <div>
      <ul className="flex min-w-0 flex-col gap-y-4">
        {agentsData.map(agent => (
          <li key={agent.id}>
            <article
              className="flex items-center gap-3 rounded-2xl border p-2"
              aria-label={agent.agentName}>
              <div
                aria-describedby="Agent icon"
                className="bg-accent text-accent-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                <BotMessageSquare className="h-4 w-4" />
              </div>
              <div aria-describedby="Agent body">
                <h3 className="mb-1 text-sm leading-5 font-medium">
                  Customer Support
                </h3>
                <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs leading-4">
                  <time dateTime={agent.createdAt}>{agent.createdAt}</time>
                  <span className="inline-block h-1 w-1 rounded-full bg-neutral-400" />
                  <span>{agent.sources.join(',')}</span>
                </div>
              </div>
              <div className="ms-auto" aria-describedby="Agent action">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={'ghost'}>
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleView(agent)}>
                      <Info className="mr-2 h-4 w-4" />
                      Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      <Ban className="mr-2 h-4 w-4" />
                      Deactivate
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
