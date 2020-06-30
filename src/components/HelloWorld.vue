<template>
    <div class="hello">
        <table>
            <tr>
                <th>Name</th>
                <th>userName</th>
                <th>Email</th>
            </tr>
            <tr v-for="user in users"  :key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        computed: mapState(['users']) ,
        created() {
            this.$store.dispatch('loadUsers');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
