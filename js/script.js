$.get('js/voucher_data.js', function(shows){
  var shows = JSON.parse(shows);

  shows.forEach(function(show){
    display_show(show);
  });
});

var display_show = function(show){
  var table = $('table');
  var tr = $('<tr>');

  var eventDate = $('<td>', { html: show.LocalEventDateDisplay });

  var eventName = $('<p>', { html: '<strong>' + show.EventName + '</strong>' });
  var eventNameRow = $('<td>', { class: 'text-primary', html: eventName });

  var eventLocation = $('<p>', {
    html: '<strong>' + show.VenueName + '</strong><br>' + show.VenueCityState
  });
  var eventLocationRow = $('<td>', { html: eventLocation });

  var purchaseButton = $('<a>', {
    class: 'btn btn-primary',
    href: 'http://ticketmaster.com/' + show.VenueAttractionSeoLink,
    text: 'Buy Now'
  });
  var purchaseButtonRow = $('<td>', { html: purchaseButton });

  tr.append(eventDate, eventNameRow, eventLocationRow, purchaseButtonRow);
  table.append(tr);
};
