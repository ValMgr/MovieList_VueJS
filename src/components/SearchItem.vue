<template>
    <div class="search">
        <div class="form-group">
        Search: <input class="form-control" type="text" v-model="search"><br>
            <button class="btn btn-primary md-2" v-on:click="searchItem()">Search</button>
            <button class="btn btn-secondary" v-on:click="resetSearch(this)">x</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "SearchItem",
    props: {
        medias: Array,
        displayed: Array,
    },
    data: function(){
        return {
            search: null,
            toDisplay: null,
        }
    },
    methods: {
        searchItem: function (){
            if(this.search == "" || this.search === null){
                this.toDisplay = this.medias
                this.$emit('setDisplay', this.toDisplay);
            }
            else{
                let r = [];
                for(const media of this.medias) {
                    for (const param in media) {
                        if(media[param] != null){
                            if(media[param][0] == undefined){
                                for(const property in media[param]){
                                    if(media[param][property].toLowerCase().includes(this.search.toLowerCase())){
                                        r.push(media)
                                        break;
                                    }
                                }
                            }
                            else if(media[param].toLowerCase().includes(this.search.toLowerCase())){
                                r.push(media)
                                break;
                            }
                        }
                    }
                }
                this.toDisplay = r;
                this.$emit('setDisplay', this.toDisplay);
            }
        },
        resetSearch: function(){
            this.search = ""
            this.toDisplay = this.medias
            this.$emit('setDisplay', this.toDisplay);
        }
    }
}
</script>

<style>
.md-2{
    margin-right: .5em;
}
</style>