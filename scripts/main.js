{
  'use strict';

  new Vue ({
    el : 'main#app',
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
