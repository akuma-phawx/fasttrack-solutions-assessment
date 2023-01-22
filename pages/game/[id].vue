<script setup>
import { ref, computed } from "vue";
import axios from "axios";

const categoryId = useRoute().params.id;
const categoryName = ref("Get Ready..");
const gameRunning = ref(true);
const questions = ref([]);
const selectedAnswer = ref(null);
const currentQuestion = ref(0);
const correctAnswers = ref(0);
const results = ref(false);

const question = computed(() => questions.value[currentQuestion.value]);
const displayText = computed(() =>
  question.value
    ? question.value.question
    : "Please wait while the minions do their work"
);

function selectAnswer() {
  if (selectedAnswer.value === question.value.correct_answer) {
    correctAnswers.value++;
  }
}

function nextQuestion() {
  if (currentQuestion.value + 1 === questions.value.length) {
    results.value = true;
    gameRunning.value = false;
    return;
  }
  currentQuestion.value++;
  selectedAnswer.value = null;
}

async function fetchQuestions() {
  try {
    const url = `https://opentdb.com/api.php?amount=3&category=${categoryId}&encode=base64`;
    const { data } = await axios.get(url);

    categoryName.value = atob(data.results[0].category);

    data.results.forEach((element) => {
      element.question = atob(element.question);
      element.answers = [
        ...element.incorrect_answers,
        element.correct_answer,
      ].map((answer) => atob(answer));
      element.correct_answer = atob(element.correct_answer);
    });
    questions.value = data.results;
  } catch (error) {
    console.error(error);
  }
}

fetchQuestions();
</script>

<template>
  <div class="game-container">
    <h2 v-if="gameRunning" class="questionHeader">{{ categoryName }}</h2>
    <div class="question-answer-container" v-if="gameRunning">
      <QuestionsQuestion :questionText="displayText" />
      <div class="answer-container">
        <div
          v-for="(answer, index) in question?.answers"
          :key="index"
          class="answer"
        >
          <span class="answerRadioText">A{{ ++index }}:</span>
          <input
            type="radio"
            :id="index"
            :value="answer"
            v-model="selectedAnswer"
            @change="selectAnswer"
          />
          <label :for="index"> {{ answer }}</label>
        </div>
      </div>
      <div class="button-container">
        <button
          :disabled="!selectedAnswer"
          class="nextButton"
          @click="nextQuestion"
        >
          Next
        </button>
        <p>or</p>
        <NuxtLink :to="{ path: '/' }"> Click here to change category </NuxtLink>
      </div>
    </div>
    <div v-if="results">
      <Results :correctAnswers="correctAnswers" />
    </div>
  </div>
</template>
<style scoped>
a {
  color: #333333; /* minimal color */
  text-decoration: none; /* remove underline */
  font-weight: bold; /* optional: bold text */
  animation: fadeIn 1s ease-in-out; /* animation on load */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
