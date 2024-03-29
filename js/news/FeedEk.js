/*
* FeedEk jQuery RSS/ATOM Feed Plugin 
* http://jquery-plugins.net/FeedEk/FeedEk.html
* Author : Engin KIZIL 
* http://www.enginkizil.com
*/

(function($){$.fn.FeedEk=function(opt){var def={FeedUrl:'',MaxCount:5,ShowDesc:true,ShowPubDate:true};if(opt){$.extend(def,opt)}var idd=$(this).attr('id');if(def.FeedUrl==null||def.FeedUrl==''){$('#'+idd).empty();return}var pubdt;$('#'+idd).empty().append('<div style="text-align:left; padding:3px;"><img src="../img/loader.gif" /></div>');$.ajax({url:'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+def.MaxCount+'&output=json&q='+encodeURIComponent(def.FeedUrl)+'&callback=?',dataType:'json',success:function(data){$('#'+idd).empty();$.each(data.responseData.feed.entries,function(i,entry){if(def.ShowPubDate){pubdt=new Date(entry.publishedDate);$('#'+idd).append('<div class="ItemDate muted">'+pubdt.toLocaleDateString()+'</div>')}$('#'+idd).append('<div class="ItemTitle"><a href="'+entry.link+'"><h3 class="text-info">'+entry.title+'</h3></a></div>');if(def.ShowDesc)$('#'+idd).append('<div class="ItemContent">'+entry.content+'</div><hr class="bs-docs-separator">')})}})}})(jQuery);