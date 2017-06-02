app.controller('ResumeCtrl', ['$scope', function($scope) {
	PDFJS.getDocument('pdf/resume.pdf').then(function (pdf) {
    console.log(pdf);
  });
}]);