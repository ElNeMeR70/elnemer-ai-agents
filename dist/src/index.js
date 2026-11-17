"use strict";
/**
 * @elnemer/ai-agents
 * Sovereign Multi-Agent & RAG Orchestration Framework
 * By Eng. Mahmoud Bek ElNemer (@ElNeMeR70)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swarm = exports.Agent = void 0;
class Agent {
    name;
    role;
    instructions;
    memory = [];
    constructor(config) {
        this.name = config.name;
        this.role = config.role;
        this.instructions = config.instructions || "";
    }
    log(entry) {
        this.memory.push(`[${new Date().toISOString()}] ${entry}`);
    }
    async run(task) {
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
exports.Agent = Agent;
class Swarm {
    name;
    agents = [];
    constructor(name = "ElnemerSwarm") {
        this.name = name;
    }
    addAgent(agent) {
        this.agents.push(agent);
        return this;
    }
    async broadcast(task) {
        return Promise.all(this.agents.map((a) => a.run(task)));
    }
}
exports.Swarm = Swarm;
