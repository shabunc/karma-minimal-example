module.exports = function(grunt) {

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['karma:run']);

}
