module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        copy: {
            dots: {
                files: [
                    {
                        expand: true,
                        src: ["src/dots.js"],
                        dest: "dist/",
                        filter: 'isFile',
                        flatten: true
                    }
                ]
            }
        },

        concat: {
            dots: {
                files: {
                    'dist/dots-bundle.js': [
                        "bower_components/auto-lightbox/auto-lightbox.js",
                        "bower_components/centerize/centerize.js",
                        "src/dots.js"
                    ]
                }
            }
        },

        uglify: {
            dots: {
                files: {
                    'dist/dots-bundle.min.js': ['dist/dots-bundle.js'],
                    'dist/dots.min.js': ['src/dots.js']
                }
            }
        },

        watch: {
            scripts: {
                files: '**/*.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask("default", ["copy", "concat", "uglify"]);
};