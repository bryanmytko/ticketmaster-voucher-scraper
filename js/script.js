$.get('js/voucher_data.js', function(shows){
  var shows = JSON.parse(shows);

  shows.forEach(function(show){
    display_show(show);
  });
});

var display_show = function(show){
  var table = $('table');
  var tr = $('<tr>');

  var eventDate = '<td>' + show.LocalEventDateDisplay + '</td>';
  var eventNameRow = '<td><p class="text-primary"><strong>' + show.EventName + '</strong></p></td>';
  var eventLocation = '<td><strong>' + show.VenueName + '</strong><br>' + show.VenueCityState + '</td>';
  var purchaseButton = '<td><a class="btn btn-primary" href="http://ticketmaster.com/' + show.VenueAttractionSeoLink + '">Buy Now</a></td>';

  tr.append(eventDate, eventNameRow, eventLocation, purchaseButton);
  table.append(tr);
};
