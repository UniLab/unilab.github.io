$(function() {
    /* Slider di immagini */
    $("imgSlider").carousel();
    
    /* News dal portale UNICAL */
    $("#news-widget").rssfeed("http://www.unical.it/portale/rss/rss2.0.xml", {
        dateformat: 'date',
    }, function(e) {
        $(e).find("div.rssBody").easyTicker({
            interval: 4500,
            visible: 1
		});
		
		$(e).find("a").addClass("text-error");
		
    },
        $("#news-widget").fadeIn("slow")
    );

    /* News dal Forum */
    $("#news-content").FeedEk({
        //FeedUrl : "http://www.uni-lab.eu/vanilla/index.php?p=/categories/novit%C3%A0/feed.rss",
        FeedUrl : "http://unilab.github.io/feed/master.rss",
        MaxCount : 3,
        ShowDesc : true,
        ShowPubDate: true
    });
});