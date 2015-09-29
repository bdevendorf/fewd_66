

    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    /**
     * Javascript/jQuery Exercises: Selecting Things In The DOM!
     * Answer the following questions.
     */

    /**
     * Question 1:
     * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
     */

     function turnBlue() {
        $('p').css('color','blue');
     }

        $('#button1').on('click', turnBlue);


    /**
     * Question 2:
     * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
     */

    function sayName() {
        $('h2').text('Beth');
    }
        $('#button1').on('click', sayName);

    /**
     * Question 3:
     * When button 1 is clicked, select the ordered list item that has the class "falseFact".
     * Using jQuery change the content to read "True Fact".
     */

    function trueFact() {
        $('li').text('True Fact');
    }
        $('#button1').on('click', trueFact);


    /**
     * Question 4:
     * When button 2 is clicked, change the background color of the whole page to "pink"
     */

     function turnPink() {
        $('body').css('background','pink');
     }
        $('#button2').on('click', turnPink);

    /**
     * Question 5:
     * When button 2 is clicked, change the color of all h2's to "green"
     */

     function turnGreen() {
        $('h2').css('color','green');
     }
        $('#button2').on('click', turnGreen);
    /**
     * Question 6:
     * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
     */
        function blockQuote() {
            $('blockquote').text('<span>no quote</span>');
        }
            $('#button2').on('click', blockQuote);

    /**
     * Question 7:
     * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
     */

     function textNinja() {
        $('h1').text('jQuery Ninja');
     }
        $('#button3').on('click', textNinja);

    /**
     * Question 8:
     * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened.
     * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
     */

     function addCode() {
        $('.city').attr('src','http://lorempixel.com/g/500/400/food');
     }
        $('#button3').on('click', addCode);

    /**
     * Question 9:
     * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
     * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
     */
     function blueGeorgia() {
        $('p').css({'color':'blue',
                    'fontFamily':'Georgia'});
     }
        $('#button3').on('click', blueGeorgia);
