new Vue({
    el: '#app',
    data: {
      comments: [],
      newComment: ''
    },
    methods: {
      addComment() {
        if (this.newComment.trim() !== '') {
          this.comments.push(this.newComment);
          this.newComment = '';
        }
      }
    }
  });