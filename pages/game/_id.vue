<template>
  <div>
    <h1>{{ question?.question }}</h1>
    <div v-for="(answer, index) in question?.answers" :key="index">
      <input
        type="radio"
        :value="answer"
        v-model="selectedAnswer"
        @change="selectAnswer"
      />
      {{ answer }}
    </div>
    <button @click="nextQuestion">Next</button>
    <div v-if="results">
      <h2>Results</h2>
      <p>Correct answers: {{ correctAnswers }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const questions = ref([]);
const selectedAnswer = ref(null);
const currentQuestion = ref(0);
const correctAnswers = ref(0);
const results = ref(false);

const question = computed(() => questions.value[currentQuestion.value]);
function selectAnswer() {
  if (selectedAnswer.value === question.value.correct_answer) {
    correctAnswers.value++;
  }
}

function nextQuestion() {
  if (currentQuestion.value + 1 === questions.value.length) {
    results.value = true;
    return;
  }
  currentQuestion.value++;
  selectedAnswer.value = null;
}

function fetchQuestions() {
  const url = "https://opentdb.com/api.php?amount=3";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        element.answers = [
          ...element.incorrect_answers,
          element.correct_answer,
        ];
      });
      questions.value = data.results;
      console.log(questions.value);
    });
}

fetchQuestions();
</script>
