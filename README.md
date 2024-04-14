- 👋 Hi, I’m @57875t
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...

<!---
57875t/57875t is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
import speech_recognition as sr
from gtts import gTTS
from playsound import playsound

# ... (语音识别部分，将语音转换为文本)

text = recognized_text  # 假设这是从语音识别得到的文本

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": text}
    ]
)

reply_text = response['choices'][0]['message']['content']

# ... (语音合成部分，将文本转换为语音并播放)

playsound('reply.mp3')  # 假设这是合成后保存的语音文件路径
