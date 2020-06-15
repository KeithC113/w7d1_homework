import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el: '#app',
    data:{
      tasks:[
        {job: "clean the toilet", isComplete:false},
        {job: "buy the shopping", isComplete:false},
        {job: "have a shower", isComplete:true}
      ],
      newTask:""
    },
    methods: {
      saveNewTask: function(){
        this.tasks.push({
          job: this.newTask,
          isComplete: false
        });
        this.newTask="";
      },
      completeTask: function(index){
        this.tasks[index].isComplete=true;
      }
    }
  });
});
