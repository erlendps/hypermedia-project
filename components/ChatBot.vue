<script setup lang="ts">
let firstOpen = true;

// Variable to control the chatbot visibility
const isOpen = ref(false);

// Toggle chatbot visibility
const toggleChatbot = () => {
  if (firstOpen) {
    // Initial message when chatbot is opened for the first time
    const firstMessage = {
      id: Date.now(),
      role: "assistant",
      content:
        "Hey! I'm Emily, here to assist you in any way I can. Need help navigating the website or just someone to talk to? Feel free to ask!",
    };
    messages.value.push(firstMessage);
    firstOpen = false;
  }

  isOpen.value = !isOpen.value;
};

// Array to store chat messages
const messages = ref<{ id: number; role: string; content: string }[]>([]);

const input = ref("");

// Function to scroll messages container to the bottom
const scrollToBottom = () => {
  const messagesContainer = document.querySelector(".messages");
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
};

// Function to send a message
const sendMessage = async () => {
  if (!input.value) return;

  const userMessage = {
    id: Date.now(),
    role: "user",
    content: input.value,
  };

  input.value = "";

  messages.value.push(userMessage);

  await nextTick();
  scrollToBottom();

  try {
    // Add typing indicator
    const botMessage = {
      id: Date.now() + 1,
      role: "typing",
      content: "...",
    };

    messages.value.push(botMessage);

    // Scroll to bottom after rendering typing indicator
    await nextTick();
    scrollToBottom();

    // Send messages to the server and receive response
    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: messages.value.slice(0, -1) }), // Exclude the typing indicator from the request
    });

    // Find the index of the typing indicator message
    const currentMessageIndex = messages.value.findIndex(
      (message) => message.content === "..."
    );
    const data = await response.json();

    // Handle API response
    if (data.choices && data.choices.length > 0) {
      if (currentMessageIndex !== -1) {
        // Update the typing indicator to the assistant message
        messages.value[currentMessageIndex].role = "assistant";
        messages.value[currentMessageIndex].content =
          data.choices[0].message.content;
      }
    } else {
      console.error("Unexpected API response:", data);
    }
  } catch (error) {
    console.error("Error sending message:", error);
  }

  // Scroll to bottom after rendering assistant message or handling error
  await nextTick();
  scrollToBottom();
};
</script>

<template>
  <!-- Chatbot Chat box -->
  <div class="chatbot_window" v-if="isOpen">
    <!-- Chat header -->
    <div class="chatHeader">
      <h2>Chatbot</h2>
      <img
        @click="toggleChatbot"
        src="~/assets/img/close_chat.png"
        alt="Close"
      />
    </div>
    <!-- Messages container -->
    <div class="messages" ref="messagesContainer">
      <!-- Render each message -->
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['message', message.role]"
      >
        <!-- Assistant message -->
        <div v-if="message.role === 'assistant'" id="assistant_row">
          <img src="~/assets/img/robot_icon.png" />
          <p>{{ message.content }}</p>
        </div>
        <!-- Typing indicator -->
        <div v-else-if="message.role === 'typing'" id="typing_row">
          <img src="~/assets/img/robot_icon.png" />
          <p>{{ message.content }}</p>
        </div>
        <!-- User message -->
        <div v-else id="user_row">
          <img src="~/assets/img/user_icon.png" />
          <p>{{ message.content }}</p>
        </div>
      </div>
    </div>
    <!-- Input area -->
    <div class="input_row">
      <textarea
        id="textInput"
        v-model="input"
        @keydown.enter.prevent="sendMessage"
        placeholder="Type a message..."
      ></textarea>
      <img @click="sendMessage" src="~/assets/img/send_msg.png" />
    </div>
  </div>

  <!-- Toggle to open/close chatbot -->
  <button class="chatbot_closed" v-else @click="toggleChatbot">
    <img src="~/assets/img/chat_closed.png" alt="Toggle Chatbot" />
  </button>
</template>

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
  border-color: #584abc;
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
  background-color: #584abc;
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
  margin-bottom: 5px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.message p {
  word-wrap: break-word;
  white-space: pre-wrap;
  border-radius: 10px;
  padding: 8px;
  font-size: 13px;
  width: 220px;
}

.message img {
  margin-top: 11px;
  width: 25px;
  height: 25px;
}

#assistant_row {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

#typing_row {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

#user_row {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
}

.message.assistant p {
  background-color: #f3a5bc;
}

.message.typing p {
  background-color: #f3a5bc;
  color: rgb(77, 77, 77);
  width: 25px;
}

.message.user {
  justify-content: flex-end;
}

.message.user p {
  text-align: left;
  background-color: #584abc;
  color: white;
}

.message.user img {
  order: 2;
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
  font-size: 15px;
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
