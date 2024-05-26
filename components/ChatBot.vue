<template>
  <!-- Chatbot Chat box -->
  <div class="chatbot_window" v-if="isOpen">
    <div class="chatHeader">
      <h2>Chatbot</h2>
      <img @click="toggleChatbot" src="~/assets/img/close_chat.png" alt="Close">
    </div>
    <div class="messages">
      <div v-for="message in messages" :key="message.id" :class="['message', message.role]">
        <div v-if="message.role === 'assistant'">
          <img src="~/assets/img/robot_icon.png">
          <p>{{ message.content }}</p>
        </div>
        <div v-else>
          <img src="~/assets/img/user_icon.png">
          <p>{{ message.content }}</p>
        </div>
      </div>
    </div>
    <div class="input_row">
      <textarea v-model="input" @keydown.enter.exact="sendMessage" placeholder="Type a message..."></textarea>
      <img @click="sendMessage" src="~/assets/img/send_msg.png">
    </div>
  </div>

  <!-- Toggle to open/close chatbot -->
  <button class="chatbot_closed" v-else @click="toggleChatbot"><img src="~/assets/img/chat_closed.png"
      alt="Toggle Chatbot" /></button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let first_open = true;
const isOpen = ref(false);

const toggleChatbot = () => {
  if (first_open) {
    // add this later
    first_open = false;
  }

  isOpen.value = !isOpen.value
}

const messages = ref<{ id: number; role: string; content: string }[]>([]);
const input = ref('');

const sendMessage = async () => {
  if (!input.value) return;

  

  const userMessage = {
    id: Date.now(),
    role: 'user',
    content: input.value,
  };

  input.value = '';
  messages.value.push(userMessage);

  try {
    /*
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: messages.value }),
    });

    const data = await response.json();
    //console.log('API Response:', data); 

    if (data.choices && data.choices.length > 0) {
      const botMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.choices[0].message.content,
      };
      
      messages.value.push(botMessage);
    } else {
      console.error('Unexpected API response:', data);
    }
    */
    messages.value.push({ id: 2, role: "assistant", content: "Test test :)))" });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
</script>

<style scoped>
.chatbot_closed {
  position: fixed;
  width: 60px;
  bottom: 80px;
  right: 100px;
  padding: 0;
  opacity: 1;
  transition: opacity 0.2s;
}

.chatbot_closed:hover {
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
}

.chatbot_window {
  position: fixed;
  bottom: 80px;
  right: 100px;
  padding: 0;
  width: 300px;
  height: 450px;
  background-color: rgb(255, 255, 255);
  border-width: 4px;
  border-color: #584ABC;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1000;
  overflow: hidden;
}

.chatHeader {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #584ABC;
}

.chatHeader h2 {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 15px;
  font-size: 22px;
  font-style: bold;
  color: white;
}

.chatHeader img:hover {
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.2s;
}

.chatHeader img {
  width: 10%;
  justify-content: flex-end;
  margin-right: 17px;
  margin-bottom: 3px;
  right: 0px;
  opacity: 1;
  transition: opacity 0.2s;
}

.messages {
  margin-top: 50px;
  max-height: 333px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.message {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  word-wrap: break-word;
}

.message.assistant {
  justify-content: flex-start;
}

.message.assistant p {
  border-radius: 10px;
  padding:3px;
  font-size:smaller;
  background-color: #F3A5BC;
}

.message.assistant img {
  width: 25%;
}

.message.user {
  justify-content: flex-end;
}

.message.user p {
  border-radius: 10px;
  padding:3px;
  text-align: left;
  font-size:smaller;
  background-color: #584ABC;
}

.message.user img {
  width: 25%;
}

.input_row {
  display: flex;
  position: absolute;
  bottom: 0px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
}

.input_row textarea {
  padding: 10px;
  padding-top: 11px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #eeeeee;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: smaller;
  max-height: 45px;
  overflow-y: auto;
  resize: none;
}

.input_row img {
  width: 10%;
  margin-right: 10px;
  right: 0px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s;
}

.input_row img:hover {
  opacity: 0.7;
  transition: opacity 0.2s;
}
</style>
