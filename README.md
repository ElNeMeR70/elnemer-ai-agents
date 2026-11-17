# @elnemer/ai-agents

Multi-Agent Swarm and Autonomous Workflow Framework for Node.js and TypeScript.
Architected by Eng. Mahmoud Bek ElNemer (@ElNeMeR70).

## Installation
```bash
npm install @elnemer/ai-agents
```

## Quick Start
```typescript
import { Agent, Swarm } from "@elnemer/ai-agents";

const swarm = new Swarm("ProductionCluster");
swarm.addAgent(new Agent({ name: "Scout", role: "Vulnerability Auditor" }));
swarm.addAgent(new Agent({ name: "Surgeon", role: "Refactoring Architect" }));

const results = await swarm.broadcast("Run full architectural health check");
console.log(results);
```

## License
MIT
