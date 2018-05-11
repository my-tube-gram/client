let basicTemp = `<div class="thumbnail">
                    <video width="100%" controls>
                        <source :src="list.url">
                    </video>
                    <div class="caption">
                        <span class="dropdown">
                        <i class="glyphicon glyphicon-chevron-down dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:20px"></i>
                            <ul class="dropdown-menu">
                                <li><a :href="'https://www.facebook.com/sharer/sharer.php?u='+list.url">Facebook</a></li>
                                <li><a :href="'https://twitter.com/intent/tweet?via='+list.description+ list.url">Twitter</a></li>
                            </ul>
                        </span>
                        <span v-if="list.userId == userId">
                            <i @click="deleteVideo" class="glyphicon glyphicon-remove" style="font-size:25px;"></i>
                        </span>
                        <span v-if="true == true">
                            <i @click="UpdateHeartOn" class="glyphicon glyphicon-heart-empty" style="font-size:25px; float:right"></i>
                        </span>
                        <span v-else>
                            <i @click="UpdateHeartOff" class="glyphicon glyphicon-heart" style="font-size:25px;color:red; float:right"></i>
                        </span>
                        <br>
                        <p><b>Likes</b></p>
                        <label>{{ list.title }}</label>
                        <p>{{ list.description }}</p>
                    </div>
                </div>`

Vue.component('field-content', {
  data () {
    return {
      lengthText: 10,
      statusReadmore: true,
      statusHeart: true,
    }
  },
  props: ['list', 'user-id'],
  template: basicTemp,
  methods: {
    UpdateLength: function () {
      this.$emit('update-length')
    },
    UpdateHeartOn: function () {
      this.$emit('update-heart-on')
    },
    UpdateHeartOff: function () {
      this.$emit('update-heart-off')
    },
    deleteVideo: function () {
      let txt
      let r = confirm("Are you sure")
      if (r == true) {
          txt = "You pressed OK!"
          this.$emit('delete-video')
          window.location.href = 'content.html'
      } else {
          txt = "You pressed Cancel!"
      }
      
    }
  }
})