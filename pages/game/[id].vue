<script setup>
import { ref, computed } from "vue";

const categoryId = useRoute().params.id;
const categoryName = ref("");
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
  const url =
    "https://opentdb.com/api.php?amount=3&category=" +
    categoryId +
    "&encode=base64";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
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
    });
}

fetchQuestions();
</script>

<template>
  <div class="game-container">
    <h2 v-if="gameRunning" class="questionHeader">{{ categoryName }}</h2>
    <div v-if="gameRunning">
      <QuestionsQuestion
        :questionText="
          question
            ? question.question
            : 'Please wait while the minions do their work'
        "
      />
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
      </div>
    </div>
    <div v-if="results">
      <Results :correctAnswers="correctAnswers" />
    </div>
  </div>
</template>

<style style="less" scoped>
@import "./Answers.styles.less";
</style>
