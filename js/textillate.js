$(function () {
    $("#service-title").textillate({
		outEffects: [ 'hinge' ],
        in: {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 500,
            sync: false,
            shuffle: false,
            reverse: false,
            callback: function () {},
        },
        out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
            callback: function () {},
        },
    });
});
