<template>
  <div
    class="card-stacks"
    :class="{ transition: isActive }"
    :style="{ width: `${height * 220}px`, height: `${width * 300}px` }"
  >
    <div
      class="stack"
      :style="{ left: isActive ? `${220 * index}px` : '0px' }"
      v-for="(stack, index) in grid"
      :key="index"
    >
      <div class="cards-down">
        <GameCard
          class="card"
          v-for="(card, index) in stack"
          :style="{
            top: isActive ? `${290 * index}px` : '0px',
            zIndex: 10 - index,
            transform: `rotateZ(${
              isActive ? 0 : Math.random() * (5 - -7) + -7
            }deg)`,
          }"
          :class="`card-${index + 1}`"
          :key="index"
          :name="card.name"
          :img="card.image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GameCard from "./GameCard.vue";
import { Card } from "../lib/sets.ts";

type Grid = Card[][];

export default {
  data() {
    return {
      isActive: false,
      cards: [
        {
          image: "https://http.cat/100",
          name: "Card 1",
        },
        {
          image: "https://http.cat/404",
          name: "Card 2",
        },
        {
          image: "https://http.cat/500",
          name: "Card 3",
        },
        {
          image: "https://http.cat/503",
          name: "Card 4",
        },
        {
          image: "https://http.cat/100",
          name: "Card 5",
        },
        {
          image: "https://http.cat/404",
          name: "Card 6",
        },
        {
          image: "https://http.cat/500",
          name: "Card 7",
        },
        {
          image: "https://http.cat/503",
          name: "Card 8",
        },
        {
          image: "https://http.cat/100",
          name: "Card 9",
        },
        {
          image: "https://http.cat/100",
          name: "Card 10",
        },
        {
          image: "https://http.cat/404",
          name: "Card 11",
        },
        {
          image: "https://http.cat/500",
          name: "Card 12",
        },
        {
          image: "https://http.cat/503",
          name: "Card 13",
        },
        {
          image: "https://http.cat/100",
          name: "Card 14",
        },
        {
          image: "https://http.cat/404",
          name: "Card 15",
        },
        {
          image: "https://http.cat/500",
          name: "Card 16",
        },
        {
          image: "https://http.cat/503",
          name: "Card 17",
        },
        {
          image: "https://http.cat/100",
          name: "Card 18",
        },
      ],
      width: 0,
      height: 0,
      grid: [] as Grid,
    };
  },
  mounted: function () {
    this.generateCardGrid();
    setTimeout(() => (this.isActive = true), 800);
  },
  components: {
    GameCard,
  },
  methods: {
    generateCardGrid: function () {
      this.width = Math.ceil(Math.sqrt(this.cards.length));
      this.height = Math.ceil(this.cards.length / this.width);
      for (let i = 0; i < this.height; i++) {
        this.grid.push([]);
        for (let j = 0; j < this.width; j++) {
          if (i * this.width + j < this.cards.length)
            this.grid[i].push(this.cards[i * this.width + j]);
        }
      }
    },
  },
};
</script>

<style scoped>
.card-stacks {
  margin: 0 auto 20px;
  padding: 0;
  position: relative;
  cursor: pointer;
}
.card-stacks .stack {
  position: absolute;
  left: 0px;
  transition: all 0.8s cubic-bezier(0.63, 0.15, 0.03, 1.02);
}
.card-stacks .stack .cards-down {
  position: relative;
  margin: 0 0 20px;
  padding: 20px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.card-stacks .stack .cards-down .card {
  transition: all 0.8s cubic-bezier(0.63, 0.15, 0.03, 1.22);
  left: 0px;
  transition-delay: 0.8s;
  position: absolute;
  top: 0px;
  background-color: transparent;
}

.card-stacks .stack .cards-down .card.card-1 {
  z-index: 10;
  transform: rotateZ(-2deg);
}
.card-stacks .stack .cards-down .card.card-2 {
  z-index: 9;
  transform: rotateZ(-7deg);
}
.card-stacks .stack .cards-down .card.card-3 {
  z-index: 8;
  transform: rotateZ(5deg);
}
.card-stacks.transition .stack .cards-down .card {
  transform: rotateZ(0deg);
}
</style>
