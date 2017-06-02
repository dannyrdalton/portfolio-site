app.controller('PDFViewerController', ['$scope', function ($scope) {
}]);

app.directive('pdfViewer', function() {
  function link($scope, $element, $attrs) {
    console.log($scope.canvasId);

    var loadingTask = PDFJS.getDocument($scope.pdfUrl);

    loadingTask.promise.then(function (pdf) {
      console.log('PDF loaded');
      
      // Fetch the first page
      var pageNumber = 1;

      pdf.getPage(pageNumber).then(function (page) {
        console.log('Page loaded');
        
        var scale = 1.5;
        var viewport = page.getViewport(scale);

        // Prepare canvas using PDF page dimensions
        var canvas = document.getElementById($scope.canvasId);
        canvas.style.display = 'block';
        canvas.style.margin = '0 auto';

        canvas.onclick = downloadPdf;

        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        var renderTask = page.render(renderContext);

        renderTask.then(function () {
          console.log('Page rendered');
        });
      });
    }, function (reason) {
      // PDF loading error
      console.error(reason);
    });

    function downloadPdf() {
      console.log('downloading yo!');
    }
  }

  return {
    restrict: 'E',
    scope: {
      canvasId: '=',
      pdfUrl: '='
    },
    template : '<div class="pdf-viewer"><canvas id="{{canvasId}}"></canvas></div>',
    controller: 'PDFViewerController',
    link: link
  };
});