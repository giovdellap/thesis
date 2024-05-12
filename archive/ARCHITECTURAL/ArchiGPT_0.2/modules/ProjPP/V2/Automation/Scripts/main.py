#Chat Completions Script interacting with gpt-3.5-turbo

import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY", "sk-proj-qTNW2Bsgu02jS5sSuBXHT3BlbkFJ3r32uljTh68oZtY1OTu8")
client = OpenAI(api_key=api_key)

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
  ]
)

print(completion.choices[0].message)