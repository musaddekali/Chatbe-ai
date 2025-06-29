'use client';

import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import {Ban, Edit, Ellipsis, Info, Trash2} from '@/components/icons';
import {cn} from '@/lib/utils';
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
    sources: ['API', 'Database', 'Files', 'API'],
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    agentName: 'Customer Support AI',
    status: 'deactivate',
    sources: ['API', 'Knowledge Base'],
    createdAt: '2024-01-20',
  },
  {
    id: 3,
    agentName: 'Data Analyzer',
    status: 'active',
    sources: ['Database', 'CSV', 'API'],
    createdAt: '2024-02-01',
  },
];

export default function AgentsTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-600';
      case 'deactivate':
        return 'bg-muted text-muted-foreground/75';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleView = (agent: Agent) => {
    console.log('View agent:', agent);
  };


  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="text-muted-foreground">Agent Name</TableHead>
          <TableHead className="text-muted-foreground">Status</TableHead>
          <TableHead className="text-muted-foreground">Sources</TableHead>
          <TableHead className="text-muted-foreground">Created at</TableHead>
          <TableHead>
            <span aria-label="Actions" className="sr-only">
              Actions
            </span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="*:border-0">
        {agentsData.map(agent => (
          <TableRow key={agent.id} className="*:py-3">
            <TableCell className="font-medium">{agent.agentName}</TableCell>
            <TableCell>
              <Badge
                variant="secondary"
                className={cn(
                  getStatusColor(agent.status),
                  'rounded-sm text-sm font-normal capitalize'
                )}>
                {agent.status}
              </Badge>
            </TableCell>
            <TableCell>{agent.sources.join(', ')}</TableCell>
            <TableCell>{agent.createdAt}</TableCell>
            <TableCell className="bg-background/95 sticky end-0">
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
