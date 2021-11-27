<template>
    <v-app>
        <v-main>
            <v-container fill-height fluid id="card">
                <v-card id="card" class="mx-auto" height="450" width="450" elevation="10">
                    <v-slide-x-transition mode="out-in">
                        <Nuxt />
                    </v-slide-x-transition>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
<style>
#bakg {
    background-image: linear-gradient(
        to right top,
        #051937,
        #004d7a,
        #008793,
        #00bf72,
        #a8eb12
    );
}
#bakw {
    background-image: linear-gradient(
        to top,
        #ffffff,
        #eeedfa,
        #dadcf5,
        #c5cbf1,
        #acbced,
        #9bbdf2,
        #85bef6,
        #69bff8,
        #52cffe,
        #41dfff,
        #46eefa,
        #5ffbf1
    );
}
#bak {
    background: rgb(2, 0, 36);
    background: linear-gradient(
        180deg,
        rgba(0, 174, 255, 1) 3%,
        rgba(255, 255, 255, 1) 100%
    );
}
#card {
    background-color: #ffffff;
}
</style>