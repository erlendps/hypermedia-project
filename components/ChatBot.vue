<template>
  <!-- Chatbot Chat box -->
  <div class="chatbot_window" v-if="isOpen">
    <div class="chatHeader"></div>
    <div class="messages">
      <div v-for="message in messages" :key="message.id" :class="['message', message.role]">
        {{ message.content }}
      </div>
    </div>
    <div class="input_row">
      <textarea v-model="input" @input="handleInput" placeholder="Type a message..."></textarea>     
      <button><img @click="sendMessage" src="~/assets/img/send_msg.png"></button>
    </div>
  </div>

  <!-- Toggle to open/close chatbot -->
  <button class="chatbot_closed" v-else @click="toggleChatbot"><img src="~/assets/img/chat_closed.png"
      alt="Toggle Chatbot" /></button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false);

const toggleChatbot = () => {
  isOpen.value = !isOpen.value
}

const handleInput = () => {
  console.log(input.value);
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

  messages.value.push(userMessage);
  input.value = '';

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
    messages.value.push({id: 2, role:"test", content:"Test test :)))"});
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
</script>

<style scoped>
.chatbot_closed {
  position: fixed;
  width: 70px;
  bottom: 80px;
  right: 100px;
  padding: 0;
}

.chatbot_window {
  position: fixed;
  bottom: 80px;
  right: 100px;
  padding: 0;
  width: 300px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  border-width: 4px;
  border-color: rebeccapurple;
  border-radius: 25px;
  z-index: 1000;
}

.messages {
  flex: 1;
  overflow-y: auto;
}

.message {
  padding: 10px;
  margin: 5px 0;
}

.message.user {
  align-self: flex-end;
  background-color: #daf1da;
}

.message.assistant {
  align-self: flex-start;
  background-color: #f1f1f1;
}

.input_row {
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 60px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
}

.input_row textarea{


  flex: 1; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; 
  max-height: 100px;
  overflow-y: auto;
  resize: none;
}


.input_row img{
  width: 50%;
}


</style>