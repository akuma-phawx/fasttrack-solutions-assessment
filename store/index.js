import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      gameRunning: false,
      selectedCategory: { id: 0, name: "NA" },
      questions: [],
      selectedAnswers: [],
    },
    mutations: {
      startGame(state) {
        state.gameRunning = true;
      },
      stopGame(state) {
        state.gameRunning = false;
      },
      setSelectedCategory(state, categoryId) {
        state.selectedCategory = categoryId;
      },
      setQuestions(state, questions) {
        state.questions = questions;
      },
      setSelectedAnswer(state, { questionIndex, answerIndex }) {
        state.selectedAnswers[questionIndex] = answerIndex;
      },
    },
  });
};
