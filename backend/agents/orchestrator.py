import os
import requests
from agno.agent import Agent, RunResponse

class YouSearchTool:
    """Tool to search You.com for CVE and vulnerability details."""
    
    def __init__(self):
        self.api_key = os.environ.get("VITE_YOU_API_KEY")
        self.base_url = "https://api.ydc-index.io/v1/search"
        
    def search_cve(self, package_name: str, version: str, cve_id: str) -> str:
        """Searches You.com for real-time information regarding a specific CVE."""
        print(f"Executing You.com Search for {cve_id} on {package_name} v{version}...")
        
        if not self.api_key:
            return "Error: YOU API Key not found."

        query = f"{package_name} {version} vulnerability {cve_id} patch fix release notes"
        
        headers = {"X-API-Key": self.api_key}
        params = {"query": query}
        
        try:
            # We would normally make the real request here, but we will mock it for now
            # if we don't want to burn credits during testing.
            # response = requests.get(self.base_url, headers=headers, params=params)
            # return response.json()
            
            return f"MOCK YOU.COM RESPONSE: Found patch notes for {cve_id}. Recommendation is to upgrade {package_name} to latest stable version."
        except Exception as e:
            return f"Search failed: {str(e)}"

# Define Agno Agents
threat_hunter_agent = Agent(
    name="Threat Hunter",
    role="Security Analyst",
    instructions="You are a Threat Hunter. Your job is to ingest vulnerability data, run web searches to find the latest threat intel and remediation strategies, and summarize the risk.",
    tools=[YouSearchTool().search_cve],
    show_tool_calls=True,
    markdown=True
)

patch_architect_agent = Agent(
    name="Patch Architect",
    role="Software Engineer",
    instructions="You are a Patch Architect. You receive threat intelligence and codebase context, and you are responsible for writing the precise code changes (diffs) required to fix the vulnerability.",
    show_tool_calls=True,
    markdown=True
)

security_auditor_agent = Agent(
    name="Security QA",
    role="Security Auditor",
    instructions="You are a Security Auditor. You review the proposed code patches against OWASP top 10 guidelines and approve them for sandbox testing.",
    show_tool_calls=True,
    markdown=True
)
