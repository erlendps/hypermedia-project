<script setup lang="ts">
import {
  XMarkIcon,
  ChatBubbleOvalLeftEllipsisIcon as ChatIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/outline";

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
  <div
    class="fixed bottom-4 w-full sm:w-[500px] h-5/6 sm:h-4/6 right-0 px-2 pointer-events-auto"
    v-if="isOpen"
  >
    <div
      class="w-full h-full bg-purple border-4 border-purple rounded-3xl shadow-[0_4px_8px_0_rgba(0,0,0,0.6)] flex flex-col"
    >
      <!-- Chat header -->
      <div class="w-full flex items-center justify-between p-2">
        <h2 class="text-2xl text-white">Chatbot</h2>
        <button type="button" @click="toggleChatbot">
          <XMarkIcon class="text-white h-10 w-10 hover:text-white-200" />
          <p class="sr-only">Close the chatbot</p>
        </button>
      </div>
      <!-- Messages container -->
      <ul
        class="bg-white grow overflow-scroll flex flex-col gap-2 py-4"
        ref="messagesContainer"
      >
        <!-- Render each message -->
        <li v-for="message in messages" :key="message.id" class="w-full px-2">
          <!-- Assistant message -->
          <div v-if="message.role === 'assistant'" class="flex gap-2">
            <RobotIcon class="w-12 sm:w-16 self-end" />
            <p
              class="bg-pink rounded-lg whitespace-pre-wrap text-wrap p-4 w-3/5"
            >
              {{ message.content }}
            </p>
          </div>
          <!-- Typing indicator -->
          <div v-else-if="message.role === 'typing'" class="flex gap-2">
            <RobotIcon class="w-12 sm:w-16 self-end" />
            <p class="bg-pink rounded-lg p-4 w-10">
              {{ message.content }}
            </p>
          </div>
          <!-- User message -->
          <div v-else class="flex flex-row-reverse gap-2">
            <UserCircleIcon
              class="w-10 h-10 sm:w-12 sm:h-12 self-end text-purple"
            />
            <p
              class="bg-purple rounded-lg p-4 whitespace-pre-wrap text-wrap w-3/5 text-white"
            >
              {{ message.content }}
            </p>
          </div>
        </li>
      </ul>
      <!-- Input area -->
      <div
        class="flex w-full bg-white border-t-2 border-white-dark p-4 rounded-b-3xl"
      >
        <textarea
          id="textInput"
          rows="1"
          v-model="input"
          @keydown.enter.prevent="sendMessage"
          class="py-2 px-4 border border-white-200 rounded-l-full w-full overflow-y-scroll resize-none bg-white-200"
          placeholder="Type a message..."
        ></textarea>
        <button class="h-full bg-white-dark rounded-r-full">
          <PaperAirplaneIcon
            class="text-purple w-11 pr-2 hover:text-purple-900"
          />
          <p class="sr-only">Send message</p>
        </button>
      </div>
    </div>
  </div>

  <!-- Toggle to open/close chatbot -->
  <div v-else class="sticky bottom-16 mb-2 flex justify-end mt-[-4.75rem]">
    <button
      class="bg-purple p-2 rounded-full border-pink border-2 hover:bg-purple-900 mr-4 lg:mr-20 shadow-[0_4px_8px_0_rgba(0,0,0,0.6)"
      @click="toggleChatbot"
    >
      <ChatIcon class="w-12 h-12 text-white" />
      <p class="sr-only">Open chatbot</p>
    </button>
  </div>
</template>
