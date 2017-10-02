{
  'use strict';

  const Task = {
    props: ["task", "index"],
    template: `
    <li class='collection-item'>
        <input type="checkbox" v-bind:id="'t_' + (index + 1)" v-model:checked="task.isDone">
        <label v-bind:for="'t_' + (index + 1)">{{ task.title }}</label>
        <a href="#" class="link-delete" title="Supprimer cette tâche">
            <i class="small material-icons" v-on:click.prevent="deletetask(index)">delete_forever</i>
        </a>
    </li>
    `,
    methods: {
      deletetask : function(index) {
        this.$emit('deletetask', index);
      }
    }
  }

  new Vue ({
    el : 'main#app',
    components: {'task': Task},
    data : {
      tasks : [
          {title : "Apprendre le Japonais", isDone : true},
          {title : "Faire de la muscu", isDone : false},
          {title : "Trouver un stage", isDone : false}
      ],
      titleTask : ""
    },

    methods : {
      remaining : function(string) {
        var count = 0
        for(var i = 0; i < this.tasks.length; i++){
          if(this.tasks[i].isDone == false)
          count++;
        }
        var multiple = count + ' ' + string;
        return count > 1 ? multiple + 's' : multiple
      },

      addTask : function() {
      if(this.titleTask == '')
            return;
      this.tasks.push({title: this.titleTask.trim(), isDone: false});
      this.titleTask = '';
      },

      removeTask : function(index) {
      this.tasks.splice(index, 1);
      }
   }
  });
}
