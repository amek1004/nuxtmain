<template>
    <div>
        <v-card>
            <v-card-title>Mysql Server test</v-card-title>
            <v-card-text>
                <ul class="txt">
                    <li v-for="list in txt" class="item" :key="list.title">
                        <span>{{ list.title }}</span>
                    </li>
                    <li v-for="list in txt" class="item" :key="list.title">
                        <span>{{ list.title }}</span>
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
            const r = await this.$axios.get("/api/mysql");
            this.txt = r.data;
        },
    },
};
</script>
