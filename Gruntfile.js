module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                    'css/main.min.css' : ['css/bootstrap.css', 'css/animate.css','css/owl.carousel.css','css/owl.theme.default.css','css/magnific-popup.css','css/font-style1.css','css/font-style2.css','css/font-style3.css','css/style.css']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'js/script.min.js' : ['js/jquery.js', 'js/bootstrap.js','js/wow.js','js/owl.carousel.js','js/jquery.filterizr.min.js','js/jquery.magnific-popup.js','js/script.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);
};
	