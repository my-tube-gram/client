let basicTemp = `<div class="thumbnail">
                    <img src="https://www.w3schools.com/w3images/nature.jpg" alt="post" style="width:100%">
                    <div class="caption">
                        <span class="dropdown">
                        <i class="glyphicon glyphicon-chevron-down dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:20px"></i>
                            <ul class="dropdown-menu">
                                <li><a href="#">Twitter</a></li>
                            </ul>
                        </span>
                        <span v-if="list.statusHeart == true">
                            <i @click="UpdateHeartOn" class="glyphicon glyphicon-heart-empty" style="font-size:25px; float:right"></i>
                        </span>
                        <span v-else>
                            <i @click="UpdateHeartOff" class="glyphicon glyphicon-heart" style="font-size:25px;color:red; float:right"></i>
                        </span>
                        <br>
                        <p><b>Likes</b></p>
                        <label>Video Name</label>
                        <p>{{ list.readmore.substring(0,list.lengthText) }}
                            <a v-if="list.statusReadmore == true" @click="UpdateLength" style="cursor: pointer;">more</a>
                        </p>
                    </div>
                </div>`

Vue.component('field-content', {
    props: ['list'],
    template: basicTemp,
    methods: {
        UpdateLength: function() {
            this.$emit('update-length')
        },
        UpdateHeartOn: function() {
            this.$emit('update-heart-on')
        },
        UpdateHeartOff: function() {
            this.$emit('update-heart-off')
        }
    }
})