<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Our Jobs</h5>
                <router-link :to="{name: 'create'}" class="btn btn-success my-2">
                    New job
                </router-link>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="job in jobPagedList.pagedList">
                        <td>{{ job.id }}</td>
                        <td>{{ job.title }}</td>
                        <td>{{ job.description }}</td>
                        <td>
                            <router-link
                                :to="{name: 'edit', params: { id: job.id }}"
                                class="btn btn-info mx-1"
                            ><b-icon-pencil></b-icon-pencil> </router-link>

                            <button @click="deleteJob(job.id)" class="btn btn-danger mx-1">
                                <b-icon-trash-fill></b-icon-trash-fill>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import axios from "axios";
    import Job from "../models/Job";
    import PagedList from "../models/PagedList";

    @Component
    export default class JobsTable extends Vue {
        public jobPagedList: PagedList<Job> = new PagedList<Job>();

        async created() {
            try {
                this.jobPagedList = (await axios.get<PagedList<Job>>(process.env.VUE_APP_SERVER_URL + "/jobs")).data;
            } catch (e) {
                alert("Ошибка получения данных с сервера");
                throw e;
            }
        }

        async deleteJob(id: number): Promise<void> {
            await axios.delete(process.env.VUE_APP_SERVER_URL + '/jobs/delete/' + id);
            let newJobs = new Array<Job>();
            this.jobPagedList.pagedList.forEach(x => {
                if (x.id !== id) {
                    newJobs.push(x);
                }
            });

            this.jobPagedList.pagedList = newJobs;
        }
    }
</script>

