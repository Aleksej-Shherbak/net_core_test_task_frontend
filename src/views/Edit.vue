<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Edit job</h5>
                <job-form></job-form>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import JobForm from "../components/JobForm.vue";

    @Component({
        components: {JobForm}
    })
    export default class Edit extends Vue {
    }
</script>
