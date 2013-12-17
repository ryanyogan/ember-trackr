var Ticket = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string')
});

Ticket.FIXTURES = [{
  id: 1,
  title: 'Ticket 1',
  description: 'This is a new ticket about something broken',
  status: 'New'
},{
  id: 2,
  title: 'Ticket 2',
  description: 'This is yet another ticket of something broken',
  status: 'New'
},{
  id: 3,
  title: 'Ticket 3',
  description: 'This is getting boring to type out',
  status: 'New'
}];

module.exports = Ticket;

