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
export declare class Agent {
    readonly name: string;
    readonly role: string;
    readonly instructions: string;
    private memory;
    constructor(config: AgentConfig);
    log(entry: string): void;
    run(task: string): Promise<TaskResult>;
}
export declare class Swarm {
    readonly name: string;
    private agents;
    constructor(name?: string);
    addAgent(agent: Agent): this;
    broadcast(task: string): Promise<TaskResult[]>;
}
