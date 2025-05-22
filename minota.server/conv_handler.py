# conversation_handler.py
import os
from dotenv import load_dotenv
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain


load_dotenv()
llm = ChatOpenAI(
    openai_api_key=os.getenv("OPENAI_API_KEY"),
    model_name="gpt-4o"
)

# Converting the question into a standalone format
standalone_template = """
Rewrite the user's question in a standalone format.
{conv_history}
The user asked:
{question}
The rewritten standalone question is:
"""
standalone_prompt = PromptTemplate(
    template=standalone_template,
    input_variables=["conv_history", "question"]
)
standalone_chain = LLMChain(
    llm=llm,
    prompt=standalone_prompt,
    output_key="standalone_question"
)

# The answer template is used to generate the final answer
answer_template = """
You are a general LLM assistant. You are having a conversation with the user.
The conversation history is as follows:
{conv_history}
The user asked:
{question}
The answer is:
"""
answer_prompt = PromptTemplate(
    template=answer_template,
    input_variables=["conv_history", "question"]
)

answer_chain = LLMChain(
    llm=llm,
    prompt=answer_prompt,
    output_key="answer"
)

# Conversation history is a list of strings
conv_history: list[str] = []

async def progress_conversation(question: str) -> str:
    """
    Handles the conversation with the user.
    """
    # 1) Merge the conversation history into a single string
    formatted_history = "\n".join(conv_history)

    # 2) Apply the standalone prompt to the question
    standalone_q = await standalone_chain.arun(
        question=question,
        conv_history=formatted_history
    )

    # 3) Ask the LLM providing the context, standalone question, and conversation history
    answer = await answer_chain.arun(
        conv_history=formatted_history,
        question=standalone_q
    )

    # Append to history
    conv_history.append(f"User: {question}")
    conv_history.append(f"Assistant: {answer}")

    return answer