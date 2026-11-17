/**
 * @elnemer/ai-agents
 * Sovereign Multi-Agent & RAG Orchestration Framework
 * By Eng. Mahmoud Bek ElNemer (@ElNeMeR70)
 */

export interface AgentConfig {
  name: string;
  role: string;
  instructions?: string;
}

export interface TaskResult {
  agent: string;
  role: string;
  status: "completed" | "failed";
  output: string;
  timestamp: string;
}

export class Agent {
  public readonly name: string;
  public readonly role: string;
  public readonly instructions: string;
  private memory: string[] = [];

  constructor(config: AgentConfig) {
    this.name = config.name;
    this.role = config.role;
    this.instructions = config.instructions || "";
  }

  public log(entry: string): void {
    this.memory.push(`[${new Date().toISOString()}] ${entry}`);
  }

  public async run(task: string): Promise<TaskResult> {
    this.log(`Task initiated: ${task}`);
    return {
      agent: this.name,
      role: this.role,
      status: "completed",
      output: `Executed "${task}" under persona [${this.role}]`,
      timestamp: new Date().toISOString(),
    };
  }
}

export class Swarm {
  public readonly name: string;
  private agents: Agent[] = [];

  constructor(name: string = "ElnemerSwarm") {
    this.name = name;
  }

  public addAgent(agent: Agent): this {
    this.agents.push(agent);
    return this;
  }

  public async broadcast(task: string): Promise<TaskResult[]> {
    return Promise.all(this.agents.map((a) => a.run(task)));
  }
}
