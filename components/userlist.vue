<template>
    <div>
        <v-card>
            <v-card-title>User list</v-card-title>
            <v-card-text>
                <ul class="txt">
                    <li v-for="list in txt" class="item" :key="list.username">
                        <v-card>{{ list.username }} </v-card><v-card>{{ list.create_time }}</v-card>
                    </li>
                </ul>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="mysql">Request</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            txt: "",
        };
    },
    methods: {
        async mysql() {
            const r = await this.$axios.get("/api/userlist");
            this.txt = r.data;
        },
    },
};
</script>
