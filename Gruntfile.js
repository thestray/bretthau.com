module.exports = function(grunt) {
 
grunt.initConfig({

stylus: {
  compile: {
    options: {
      compress: false,
      paths: ['css']
    },
    files: {
      'build/css/bh.css': 'css/bh.styl'
    }
  }
},
jade: {
  compile: {
    files: [{
      expand: true,
      cwd: "",
      src: "*.jade",
      dest: "build",
      ext: ".html"
    }]
  }
},
 watch: {
   jade: {
    files: [ '*.jade' ],
    tasks: ['jade']
  }
},
 
});
    
 // Load grunt plugins
 grunt.loadNpmTasks('grunt-contrib-stylus');
 grunt.loadNpmTasks('grunt-contrib-jade');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.registerTask('default', ['stylus', 'jade',]);
    
};
