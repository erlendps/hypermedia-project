<template>
    <div class="chatbot">
      <div class="messages">
        <div v-for="message in messages" :key="message.id" :class="['message', message.role]">
          {{ message.content }}
        </div>
      </div>
      <input v-model="input" @keydown.enter="sendMessage" placeholder="Type a message..." />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
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
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: messages.value }),
      });
  
      const data = await response.json();
      //console.log('API Response:', data); // Add this line to log the response
  
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
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  </script>
  
  <style scoped>
  .chatbot {
    display: flex;
    flex-direction: column;
    height: 100vh;
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
  input {
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  