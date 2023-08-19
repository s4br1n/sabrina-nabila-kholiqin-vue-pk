<template>
  <div>
    <v-container>
      <v-row class="text-center" justify="center">
        <v-col class="caption">
          <h1>Meet the characters</h1>
          <p>
            <br />Here's some photo of Harry Potter character that you may have
            been seen in the movies
          </p>
        </v-col>

        <v-layout row wrap>
          <v-flex
            v-for="character in listCharacters"
            :key="character.id"
            sm3
            lg2
          >
            <!-- set size berdasarkan viewport sm = small device, md = medium device -->
            <v-card class="character-item">
              <v-img
                :src="character.image"
                :alt="character.id"
                class="character-image"
              ></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "CharacterView",
  computed: {
    ...mapState("character", ["listCharacters"]),
  },
  methods: {
    ...mapActions("character", ["fetchCharacters"]),
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>

<style>
h1 {
  font-size: 35px;
  color: plum;
}
p {
  font-size: 20px;
}
.caption {
  padding: 50px;
}
.character-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.character-item {
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.character-image {
  width: 100%;
  height: 200px;
}
</style>
