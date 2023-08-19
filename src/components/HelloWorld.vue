<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mt-4" cols="12">
        <v-img
          :src="require('../assets/hp.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="txt">
        <h1>
          List of Harry Potter's Characters
        </h1>

        <p class="desc">
          Harry Potter is a film series based on the eponymous novels by British author J. K. Rowling. The series is produced and distributed by Warner Bros. Pictures and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone (2001) and culminating with Harry Potter and the Deathly Hallows – Part 2 (2011).A spin-off prequel series, planned to consist of five films, started with Fantastic Beasts and Where to Find Them (2016), marking the beginning of the Wizarding World shared media franchise.
          <br><br>
          The series was mainly produced by David Heyman, and stars Daniel Radcliffe, Rupert Grint, and Emma Watson as the three leading characters: Harry Potter, Ron Weasley, and Hermione Granger. Four directors worked on the series: Chris Columbus, Alfonso Cuarón, Mike Newell, and David Yates.Michael Goldenberg wrote the screenplay for Harry Potter and the Order of the Phoenix (2007), while the remaining films' screenplays were written by Steve Kloves. Production took place over ten years, with the main story arc following Harry's quest to overcome his arch-enemy Lord Voldemort.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.txt{
  padding-right: 40px;
  padding-left: 40px;

}
.desc{
  font-size: 15px;
}
</style>
