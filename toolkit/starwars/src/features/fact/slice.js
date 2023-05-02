import { createSlice } from '@reduxjs/toolkit';

const starWarsSlice = createSlice({
  name: 'facts',
  initialState: {
    allFacts: [
      '1. Прообразом Чубакки стал пес режиссера.',
      '2. Актерам разрешили подобрать любимый цвет для своих световых мечей.',
      '3. В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.',
      '4. Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.',
      '5. Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок',
    ],
    currentFacts: [],
  },
  reducers: {
    showFacts(state, number) {
      state.currentFacts = state.allFacts.slice(0, Number(number.payload));
    },
  },
});

export const { showFacts, currentFacts } = starWarsSlice.actions;
export default starWarsSlice.reducer;
