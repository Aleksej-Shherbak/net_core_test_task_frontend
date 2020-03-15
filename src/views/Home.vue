<template>
    <div>
        <JobsTable/>
    </div>
</template>

<script>
    import JobsTable from "@/components/JobsTable.vue";

    export default {
        name: "Home",
        components: {
            JobsTable
        }
    };
</script>
