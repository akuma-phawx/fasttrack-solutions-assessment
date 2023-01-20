<template>
  <div class="game-container">
    <div v-if="gameRunning">
      <QuestionsQuestion :questionText="question?.question" />
      <div class="answer-container">
        <div
          v-for="(answer, index) in question?.answers"
          :key="index"
          class="answer"
        >
          <input
            type="radio"
            :value="answer"
            v-model="selectedAnswer"
            @change="selectAnswer"
          />
          {{ answer }}
        </div>
      </div>
      <div class="button-container">
        <button class="nextButton" @click="nextQuestion">Next</button>
      </div>
    </div>
    <div v-if="results">
      <Results :correctAnswers="correctAnswers" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const gameRunning = ref(true);
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
    gameRunning.value = false;
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

<style style="less" scoped>
@import "./Answers.styles.less";
</style>
