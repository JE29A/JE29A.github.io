
var app = angular.module('myApp',[]);

app.controller("playbookCSV", function($scope) {
    $scope.testStr = "Test";
    $scope.csvData = {};
    $scope.playbookData = {};
});

app.directive('fileReader', function() {
    let linkFunc = function(scope, element, attrs) {
        $(element).on('change', function(changeEvent) {
            scope.$parent
            scope.csvData = {};
            console.log(scope.$parent);
            let files = changeEvent.target.files;
            let loadedFiles = 0;
            for(let i = 0; i < files.length; i++) {
                Papa.parse(files[i], {
                    "header": true,
                    complete: function(results, file) {
                        let parts = file.name.split("_");
                        let part = parts[parts.length - 1].split('.')[0];
                        scope.$parent.csvData[part] = results.data;
                        loadedFiles++;
                        if (loadedFiles === files.length) {
                            //console.log(scope.$parent);
                            scope.$parent.playbookData = parseCsvData(scope.$parent.csvData);
                        }
                    }
                });
            }
        });
    };
    return {
        scope: {
            csvData:"="
        },
        link: linkFunc
    };
});

function parseCsvData(csvData) {
    for(let set in csvData) {
        console.log(set);
        console.log(csvData[set]);
        
    }
    return {};
}

