<template>
    <div id="app">
        <nav class="navbar navbar-light bg-light">
            <router-link class="navbar-brand" :to="{name: 'home'}">
              <b-icon icon="bell-fill" class="border rounded"></b-icon>
              Jobs
            </router-link>
        </nav>
        <router-view/>
    </div>
</template>
