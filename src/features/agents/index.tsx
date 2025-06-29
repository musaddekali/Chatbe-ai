'use client';

import {Plus} from '@/components/icons';
import {Button} from '@/components/ui';
import AgenstList from './components/AgenstList';
import AgentsTable from './components/AgentsTable_old';

export default function Agents() {
  return (
    <section aria-label="Agents page">
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto]">
        <div>
          <h3 className="text-2xl font-medium">Agents</h3>
          <p className="text-muted-foreground mt-2">
            Create and manage your AI agents
          </p>
        </div>
        <Button aria-label="Create new agent">
          <Plus /> New Agent
        </Button>
      </div>

      <div className="mt-6">
        <AgenstList />
      </div>
    </section>
  );
}
