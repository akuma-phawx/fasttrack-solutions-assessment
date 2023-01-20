import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      gameRunning: false,
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
      setQuestions(state, questions) {
        state.questions = questions;
      },
      setSelectedAnswer(state, { questionIndex, answerIndex }) {
        state.selectedAnswers[questionIndex] = answerIndex;
      },
    },
  });
};
