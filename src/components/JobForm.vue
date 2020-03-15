<template>
    <div>
        <b-form @submit.prevent="onSubmit">
            <b-form-group
                    id="input-group-1"
                    label="Title"
                    label-for="input-1"
                    description="Please add a job title"
            >
                <b-form-input
                        id="input-1"
                        v-model="job.title"
                        type="text"
                        required
                        placeholder="Enter title"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                    id="input-group-2"
                    label="Title"
                    label-for="input-2"
                    description="Please add a job description"
            >
                <b-form-input
                        id="input-2"
                        v-model="job.description"
                        type="text"
                        required
                        placeholder="Enter description"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>

    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import axios from "axios";
    import Job from "@/models/Job";

    @Component
    export default class JobForm extends Vue {
        public job: Job = new Job();

        async onSubmit() {
            if (this.job.id === 0) {
                await axios.post(process.env.VUE_APP_SERVER_URL + "/jobs/create", this.job);
            } else {
                await axios.patch(process.env.VUE_APP_SERVER_URL + "/jobs/update/" + this.job.id, this.job);
            }

            await this.$router.push({name: "home"})
        }

        async created() {
            if (this.$route.params.id) {
                try {
                    this.job = (await axios.get<Job>(process.env.VUE_APP_SERVER_URL + "jobs/read/" +
                        this.$route.params.id)).data;
                } catch (e) {
                    alert("Ошибка при получении данных");
                    throw e;
                }
            }
        }
    }
</script>
