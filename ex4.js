//Javascript

//call to jQuery ready function
//make sure html and css is loaded

$(document).ready(function () {
    console.log('ready');

    $('p').slideUp();

    //-----------------hover over the categories--------------

    $('img.keys').hover(function () {
        $('img.keys').attr('src', 'images/keys.jpg').attr('width', '250').attr('height', '250');
    }, function () {
        $('img.keys').attr('src', 'images/keys-h.jpg');
    });

    $('img.mouse').hover(function () {
        $('img.mouse').attr('src', 'images/mouse.jpg').attr('width', '250').attr('height', '250');
    }, function () {
        $('img.mouse').attr('src', 'images/mouse-h.jpg');
    });

    $('img.earphones').hover(function () {
        $('img.earphones').attr('src', 'images/earphones.jpg').attr('width', '250').attr('height', '250');
    }, function () {
        $('img.earphones').attr('src', 'images/earphones-h.jpg');
    });

    $('img.stapler').hover(function () {
        $('img.stapler').attr('src', 'images/stapler.jpg').attr('width', '250').attr('height', '250');
    }, function () {
        $('img.stapler').attr('src', 'images/stapler-h.jpg');
    });

    $('img.wallet').hover(function () {
        $('img.wallet').attr('src', 'images/wallet.jpg').attr('width', '250').attr('height', '250');
    }, function () {
        $('img.wallet').attr('src', 'images/wallet-h.jpg');
    });


    //---------------click on categories-----------------------

    $('img.keys').click(function () {
        $('img.keys').attr('src', 'images/keys.jpg').attr('width', '250').attr('height', '250');

        $('p.keys').slideToggle();

        return false;
    });

    $('img.mouse').click(function () {
        $('img.mouse').attr('src', 'images/mouse.jpg').attr('width', '250').attr('height', '250');

        $('p.mouse').slideToggle();

        return false;
    });

    $('img.earphones').click(function () {
        $('img.earphones').attr('src', 'images/earphones.jpg').attr('width', '250').attr('height', '250');

        $('p.earphones').slideToggle();

        return false;
    });

    $('img.stapler').click(function () {
        $('img.stapler').attr('src', 'images/stapler.jpg').attr('width', '250').attr('height', '250');

        $('p.stapler').slideToggle();

        return false;
    });

    $('img.wallet').click(function () {
        $('img.wallet').attr('src', 'images/wallet.jpg').attr('width', '250').attr('height', '250');

        $('p.wallet').slideToggle();

        return false;
    });



});