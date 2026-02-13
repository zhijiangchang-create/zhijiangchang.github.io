# Official Prompt Engineering Documentation & Specifications

## Overview

This document provides direct links to official prompt engineering documentation from major LLM providers. These are the authoritative sources for prompt specifications, reserved keywords, and best practices.

---

## 1. Anthropic Claude

### Primary Documentation

**Main Prompt Engineering Guide:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- Comprehensive overview of prompt engineering concepts and techniques

**Claude 4.x Best Practices:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices
- Specific guidance for Claude 4.x models (Opus 4.5, Sonnet 4.5, Haiku 4.5)
- Covers precise instruction following, formatting preferences, parallel tool calling

**Interactive Tutorial:**
- https://github.com/anthropics/prompt-eng-interactive-tutorial
- Step-by-step hands-on tutorial with 9 chapters + appendix
- Includes practice exercises and answer keys

### Specific Techniques

**Be Clear and Direct:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct

**Use Examples (Multishot Prompting):**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-examples

**Let Claude Think (Chain of Thought):**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought

**Use XML Tags:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags
- Anthropic's recommended structured prompting format

**Give Claude a Role (System Prompts):**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts

**Chain Complex Prompts:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts

**Long Context Tips:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips

**Extended Thinking Tips:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/extended-thinking

### Security & Safety

**Reduce Hallucinations:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/reduce-hallucinations

**Increase Output Consistency:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/increase-consistency

**Mitigate Jailbreaks:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/mitigate-jailbreaks

**Reduce Prompt Leak:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/reduce-prompt-leak

**Keep Claude in Character:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/stay-in-character

### Additional Resources

**Anthropic Cookbook:**
- https://github.com/anthropics/anthropic-cookbook
- Practical examples and code samples

**Long Context Window Prompting:**
- https://www.anthropic.com/news/prompting-long-context
- Research on techniques for 100K+ token contexts

**Prompt Engineering for Business:**
- https://www.anthropic.com/news/prompt-engineering-for-business-performance
- Enterprise-focused case studies and techniques

### Tools

**Prompt Generator:**
- Available in Claude.ai interface
- Helps create structured prompts

**Prompt Improver:**
- Built-in tool for enhancing existing prompts

---

## 2. OpenAI (GPT Models)

### Primary Documentation

**Main Prompt Engineering Guide:**
- https://platform.openai.com/docs/guides/prompt-engineering
- Official OpenAI prompt engineering strategies

**GPT-4.1 Prompting Guide:**
- https://cookbook.openai.com/examples/gpt4-1_prompting_guide
- Specific guidance for GPT-4.1 models
- Covers precise instruction following, chain of thought, long context

**GPT-5 Prompting Guide:**
- https://platform.openai.com/docs/guides/prompt-engineering
- Agentic and long-running rollout best practices
- Planning, tool use, frontend development

### Best Practices

**OpenAI Help Center - Best Practices:**
- https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api
- Practical tips and prompt formats
- Temperature and parameter guidance

**ChatGPT Prompt Engineering:**
- https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt
- User-facing guidance for ChatGPT interface

### Key Strategies

**Six Core Strategies:**
1. Write clear instructions
2. Provide reference text
3. Split complex tasks into simpler subtasks
4. Give the model time to "think"
5. Use external tools
6. Test changes systematically

**Detailed Strategy Pages:**
- https://platform.openai.com/docs/guides/prompt-engineering/strategy-write-clear-instructions
- Individual pages for each strategy with examples

### API Documentation

**Messages API:**
- https://platform.openai.com/docs/api-reference/chat
- System, user, assistant message roles
- Function calling specifications

**Function Calling:**
- https://platform.openai.com/docs/guides/function-calling
- Tool use and structured outputs

---

## 3. Google (Gemini Models)

### Primary Documentation

**Prompt Design Strategies:**
- https://ai.google.dev/gemini-api/docs/prompting-strategies
- Core concepts, strategies, and best practices
- Temperature, few-shot learning, system instructions

**Gemini 3 Prompting Guide:**
- https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide
- Specific guidance for Gemini 3 models
- Advanced reasoning and instruction following

**Prompt Gallery:**
- https://ai.google.dev/gemini-api/prompts
- Interactive showcase of prompting concepts

### Vertex AI Documentation

**Vertex AI Prompt Design:**
- https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/introduction-prompt-design
- Enterprise-focused prompt engineering

**Gemini for Google Cloud:**
- https://docs.cloud.google.com/gemini/docs/discover/write-prompts
- Google Cloud product integration
- 4,000 character prompt limit guidance

### Workspace & Enterprise

**Gemini Workspace Prompt Guide:**
- https://workspace.google.com/learning/content/gemini-prompt-guide
- Job role and use case organization
- Practical guide for organizations

**Gemini Enterprise Prompt Guide:**
- https://cloud.google.com/gemini-enterprise/resources/prompt-guide
- Multi-document tasks, NotebookLM integration
- Sensitive data handling

**Official PDF Guide (101 pages):**
- https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf
- Quick-start handbook with examples
- Role-based prompting patterns

### Model-Specific Guides

**Gemini Nano (ML Kit):**
- https://developers.google.com/ml-kit/genai/prompt/android/prompt-design
- On-device model prompting
- Delimiter requirements (## critical)

**Firebase AI Logic:**
- https://firebase.google.com/docs/ai-logic/prompt-design
- Mobile and web app integration

### Key Recommendations

**Gemini 3 Best Practices:**
- Be precise and direct
- Use consistent structure with delimiters
- Keep temperature at default (1.0)
- Place negative constraints at end
- Split complex tasks into steps

---

## 4. Meta (Llama Models)

### Official Documentation

**Llama Documentation:**
- https://llama.meta.com/docs/
- Main documentation portal

**Prompt Engineering Guide:**
- https://llama.meta.com/docs/how-to-guides/prompting
- Official Meta prompt engineering guidance

**Llama 3.3 Instruction Tuning:**
- https://llama.meta.com/docs/model-cards-and-prompt-formats/llama3_3
- Specific format requirements

### Prompt Format

**Standard Format:**
```
<|begin_of_text|><|start_header_id|>system<|end_header_id|>

{{ system_prompt }}<|eot_id|><|start_header_id|>user<|end_header_id|>

{{ user_message }}<|eot_id|><|start_header_id|>assistant<|end_header_id|>
```

**Llama 2 Format:**
```
[INST] <<SYS>>
{{ system_prompt }}
<<SYS>>

{{ user_message }} [/INST]
```

### Community Resources

**Meta AI Research:**
- https://ai.meta.com/resources/models-and-libraries/llama/
- Research papers and technical details

---

## 5. Mistral AI

### Official Documentation

**Prompting Capabilities:**
- https://docs.mistral.ai/capabilities/prompting/
- Core prompting techniques

**API Documentation:**
- https://docs.mistral.ai/api/
- Message format and parameters

**Guardrailing:**
- https://docs.mistral.ai/capabilities/guardrailing/
- Safety and content moderation

### Prompt Format

```
<s>[INST] User instruction [/INST] Model response</s>
[INST] Follow-up instruction [/INST]
```

---

## 6. Cohere

### Official Documentation

**Prompt Engineering Guide:**
- https://docs.cohere.com/docs/prompt-engineering
- Comprehensive prompting strategies

**Command R+ Documentation:**
- https://docs.cohere.com/docs/command-r-plus
- Latest model specifications

**Retrieval Augmented Generation (RAG):**
- https://docs.cohere.com/docs/retrieval-augmented-generation-rag
- Context integration patterns

---

## 7. Community & Multi-Provider Resources

### Comprehensive Guides

**Prompt Engineering Guide (DAIR.AI):**
- https://www.promptingguide.ai/
- Provider-agnostic comprehensive guide
- Latest papers and techniques
- Multi-language support

**GitHub Repository:**
- https://github.com/dair-ai/Prompt-Engineering-Guide
- Open-source community resource

### Amazon Bedrock

**Prompt Engineering with Claude on Bedrock:**
- https://aws.amazon.com/blogs/machine-learning/prompt-engineering-techniques-and-best-practices-learn-by-doing-with-anthropics-claude-3-on-amazon-bedrock/
- AWS-specific integration patterns

**Bedrock Prompt Management:**
- https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html
- Versioning and deployment

---

## 8. API Specifications & Message Formats

### Anthropic Claude API

**Messages API:**
```json
{
  "model": "claude-sonnet-4-5-20250929",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "prompt here"
    }
  ],
  "system": "system prompt here"
}
```

**Documentation:**
- https://docs.anthropic.com/en/api/messages

### OpenAI API

**Chat Completions:**
```json
{
  "model": "gpt-4",
  "messages": [
    {
      "role": "system",
      "content": "system prompt"
    },
    {
      "role": "user",
      "content": "user message"
    }
  ]
}
```

**Documentation:**
- https://platform.openai.com/docs/api-reference/chat

### Google Gemini API

**Generate Content:**
```json
{
  "contents": [{
    "role": "user",
    "parts": [{
      "text": "prompt here"
    }]
  }],
  "systemInstruction": {
    "parts": [{
      "text": "system instruction"
    }]
  }
}
```

**Documentation:**
- https://ai.google.dev/api/rest/v1/models/generateContent

---

## 9. Prompt Template Specifications

### XML Tags (Anthropic)

**Recommended Tags:**
```xml
<instructions>
<context>
<examples>
<input>
<output>
<constraints>
<format>
```

**Documentation:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags

### Markdown Formatting

**Standard Markdown:**
```markdown
# System Context
## Instructions
### Input Data
```

**Most providers support standard Markdown**

### Special Tokens

**Provider-Specific:**
- Anthropic: XML tags
- OpenAI: No special tags required
- Google: ## delimiters recommended
- Meta Llama: Special tokens required
- Mistral: [INST] tags

---

## 10. Safety & Security Documentation

### Anthropic Safety

**Trust & Safety:**
- https://www.anthropic.com/trust-and-safety
- Safety features and policies

**Responsible Scaling Policy:**
- https://www.anthropic.com/responsible-scaling-policy
- Risk management framework

### OpenAI Safety

**Safety Best Practices:**
- https://platform.openai.com/docs/guides/safety-best-practices
- Moderation API
- Content policy

**Usage Policies:**
- https://openai.com/policies/usage-policies
- Prohibited uses

### Google Safety

**Responsible AI Practices:**
- https://ai.google/responsibility/responsible-ai-practices/
- Principles and guidelines

**Safety Settings:**
- https://ai.google.dev/gemini-api/docs/safety-settings
- Harm category configuration

---

## 11. Advanced Topics

### Function Calling / Tool Use

**Anthropic Tool Use:**
- https://docs.anthropic.com/en/docs/build-with-claude/tool-use

**OpenAI Function Calling:**
- https://platform.openai.com/docs/guides/function-calling

**Google Function Calling:**
- https://ai.google.dev/gemini-api/docs/function-calling

### Structured Outputs

**Anthropic JSON Mode:**
- https://docs.anthropic.com/en/docs/build-with-claude/tool-use#json-mode

**OpenAI Structured Outputs:**
- https://platform.openai.com/docs/guides/structured-outputs

**Google Response Schema:**
- https://ai.google.dev/gemini-api/docs/json-mode

### Multimodal Prompting

**Vision:**
- Anthropic: https://docs.anthropic.com/en/docs/build-with-claude/vision
- OpenAI: https://platform.openai.com/docs/guides/vision
- Google: https://ai.google.dev/gemini-api/docs/vision

**PDF Support:**
- Anthropic: https://docs.anthropic.com/en/docs/build-with-claude/pdf-support
- Google: Native support in Gemini

---

## 12. Testing & Evaluation

### Anthropic

**Evaluations:**
- https://docs.anthropic.com/en/docs/test-and-evaluate/evaluations
- Creating and running evals

**Prompt Caching:**
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
- Performance optimization

### OpenAI

**Evals Framework:**
- https://github.com/openai/evals
- Open-source evaluation framework

**Fine-tuning:**
- https://platform.openai.com/docs/guides/fine-tuning
- Custom model training

### Google

**Model Evaluation:**
- https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluate-models
- Vertex AI evaluation tools

---

## 13. Migration Guides

### Claude 3.5 to Claude 4.x

**Migration Guide:**
- https://docs.anthropic.com/en/docs/about-claude/models#model-comparison
- Breaking changes and improvements

### GPT-3.5/4 to GPT-4.1/5

**Model Migration:**
- https://platform.openai.com/docs/guides/model-migration
- Version differences

### Gemini 1.5 to Gemini 3

**What's New:**
- https://cloud.google.com/vertex-ai/generative-ai/docs/start/what-is-new
- Feature updates and changes

---

## 14. Rate Limits & Quotas

### Anthropic

**Rate Limits:**
- https://docs.anthropic.com/en/api/rate-limits
- Tier-based limits

### OpenAI

**Rate Limits:**
- https://platform.openai.com/docs/guides/rate-limits
- Token per minute (TPM) and requests per minute (RPM)

### Google

**Quotas:**
- https://cloud.google.com/vertex-ai/generative-ai/docs/quotas
- Project and regional limits

---

## 15. Pricing & Token Counting

### Token Calculators

**Anthropic:**
- https://docs.anthropic.com/en/docs/build-with-claude/token-counting
- Claude tokenizer

**OpenAI:**
- https://platform.openai.com/tokenizer
- Interactive tokenizer tool

**Google:**
- https://ai.google.dev/gemini-api/docs/tokens
- Token counting guide

### Pricing Pages

**Anthropic:**
- https://www.anthropic.com/pricing

**OpenAI:**
- https://openai.com/api/pricing/

**Google:**
- https://cloud.google.com/vertex-ai/generative-ai/pricing

---

## 16. Developer Tools & Playgrounds

### Interactive Environments

**Anthropic Console:**
- https://console.anthropic.com/
- Workbench for testing prompts

**OpenAI Playground:**
- https://platform.openai.com/playground
- Interactive prompt testing

**Google AI Studio:**
- https://aistudio.google.com/
- Rapid prototyping and iteration

**Vertex AI Studio:**
- https://console.cloud.google.com/vertex-ai/studio
- Enterprise prompt development

---

## 17. Research Papers & Technical Reports

### Anthropic Research

**Constitutional AI:**
- https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback

**Long Context Windows:**
- https://www.anthropic.com/research/many-shot-jailbreaking

### OpenAI Research

**GPT-4 Technical Report:**
- https://arxiv.org/abs/2303.08774

**InstructGPT:**
- https://arxiv.org/abs/2203.02155

### Google Research

**Gemini Technical Report:**
- https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf

---

## 18. SDKs & Client Libraries

### Anthropic

**Python SDK:**
- https://github.com/anthropics/anthropic-sdk-python
- Official Python client

**TypeScript SDK:**
- https://github.com/anthropics/anthropic-sdk-typescript
- Official TypeScript/JavaScript client

### OpenAI

**Python:**
- https://github.com/openai/openai-python

**Node.js:**
- https://github.com/openai/openai-node

### Google

**Python:**
- https://github.com/googleapis/python-aiplatform

**Node.js:**
- https://github.com/googleapis/nodejs-ai-platform

---

## 19. Compliance & Governance

### Data Privacy

**Anthropic:**
- https://www.anthropic.com/legal/privacy
- Privacy policy and data handling

**OpenAI:**
- https://openai.com/policies/privacy-policy
- Data usage policies

**Google:**
- https://cloud.google.com/privacy
- Cloud privacy commitments

### Compliance Certifications

**Anthropic:**
- SOC 2 Type II
- HIPAA (Business Associate Agreement available)

**OpenAI:**
- SOC 2 compliant
- GDPR compliant

**Google:**
- ISO 27001, SOC 2/3
- HIPAA, PCI DSS
- https://cloud.google.com/security/compliance

---

## 20. Community & Support

### Official Communities

**Anthropic:**
- https://discord.gg/anthropic
- Discord community

**OpenAI:**
- https://community.openai.com/
- Developer forum

**Google:**
- https://developers.google.com/community
- Developer community programs

### Support Channels

**Anthropic:**
- support@anthropic.com
- Console support chat

**OpenAI:**
- https://help.openai.com/
- Help center and tickets

**Google:**
- https://cloud.google.com/support
- Tiered support plans

---

## Quick Reference Table

| Provider | Main Docs | Prompt Guide | API Docs |
|----------|-----------|--------------|----------|
| **Anthropic** | [docs.anthropic.com](https://docs.anthropic.com) | [Prompt Engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) | [API Reference](https://docs.anthropic.com/en/api/messages) |
| **OpenAI** | [platform.openai.com](https://platform.openai.com/docs) | [Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering) | [API Reference](https://platform.openai.com/docs/api-reference) |
| **Google** | [ai.google.dev](https://ai.google.dev/) | [Prompting Strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies) | [API Reference](https://ai.google.dev/api) |
| **Meta** | [llama.meta.com](https://llama.meta.com/docs/) | [Prompting](https://llama.meta.com/docs/how-to-guides/prompting) | [Model Cards](https://llama.meta.com/docs/model-cards-and-prompt-formats/) |
| **Mistral** | [docs.mistral.ai](https://docs.mistral.ai/) | [Prompting](https://docs.mistral.ai/capabilities/prompting/) | [API](https://docs.mistral.ai/api/) |
| **Cohere** | [docs.cohere.com](https://docs.cohere.com/) | [Prompt Engineering](https://docs.cohere.com/docs/prompt-engineering) | [API Reference](https://docs.cohere.com/reference) |

---

## Update Frequency

This document was last updated: **February 2026**

**Recommended Update Schedule:**
- Monthly: Check for new model releases
- Quarterly: Review documentation changes
- Annually: Complete documentation refresh

**How to Stay Updated:**
1. Subscribe to provider blogs and newsletters
2. Follow official Twitter/X accounts
3. Join Discord/community forums
4. Watch GitHub repositories for updates
5. Monitor API changelog pages

---

## Conclusion

For the most authoritative and up-to-date information, always refer to the official documentation from each provider. The landscape of prompt engineering evolves rapidly as new models and techniques emerge.

When building production systems:
1. Start with official documentation
2. Test thoroughly with your specific use cases
3. Monitor for updates and deprecations
4. Follow security best practices
5. Maintain version control for prompts
