// Converts to single web app

// change to interest prompt
// (function() {
// 	var prompt1 = document.getElementById("prompt");
// 	var MS = document.getElementById("middleSchool");
// 	var HS = document.getElementById("highSchool");
// 	var college = document.getElementById("college");
//
// 	var changePrompt = function() {
// 		prompt1.innerHTML = "I like...";
// 	}
//
// 	MS.addEventListener("click", changePrompt);
// 	HS.addEventListener("click", changePrompt);
// 	college.addEventListener("click", changePrompt);
// })();
//
// // change selections
// (function () {
// 	var subjectChoice = document.getElementById("eduLevel");
// 	var MS = document.getElementById("middleSchool");
// 	var HS = document.getElementById("highSchool");
// 	var college = document.getElementById("college");
//
// 	var changeContent = function() {
// 		subjectChoice.innerHTML = "<div class='col-md-4 text-center'>Art</div>" +
// 		"<div id='math' class='col-md-4 text-center'>Math</div>" +
//         "<div class='col-md-4 text-center'>Science</div>" +
//         "<div class='col-md-4 text-center'>Sports</div>" +
//         "<div class='col-md-4 text-center'>Games</div>" +
//         "<div class='col-md-4 text-center'>Fashion</div>" +
//
//         "<div class='col-md-4 text-center'>Music</div>" +
//         "<div class='col-md-4 text-center'>Food</div>" +
//         "<div class='col-md-4 text-center'>Travel</div>"
//
// 	}
//
// 	MS.addEventListener("click", changeContent);
// 	HS.addEventListener("click", changeContent);
// 	college.addEventListener("click", changeContent);
// })();
//
// // change to learning form prompt
// function learningForm() {
// 	var prompt2 = document.getElementById("prompt");
// 	var mathSubject = document.getElementById("math");
//
// 	var changeQS = function() {
// 		prompt2.innerHTML = "I like to learn...";
// 	}
//
// 	mathSubject.addEventListener("click", changeQS);
// };
//
// learningForm();

// Thanks: http://stackoverflow.com/questions/16858954/how-to-properly-use-jspdf-library
    function demoFromHTML() {
        var pdf = new jsPDF('p', 'pt', 'letter');
        // source can be HTML-formatted string, or a reference
        // to an actual DOM element from which the text will be scraped.
        source = $('#grandResults')[0];

        // we support special element handlers. Register them with jQuery-style
        // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
        // There is no support for any other type of selectors
        // (class, of compound) at this time.
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector
            '#bypassme': function (element, renderer) {
                // true = "handled elsewhere, bypass text extraction"
                return true
            }
        };
        margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };
        // all coords and widths are in jsPDF instance's declared units
        // 'inches' in this case
        pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },

        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
        }, margins);
    }

$('.label').click(function(){debugger;
$(this).toggleClass("checked")


});
