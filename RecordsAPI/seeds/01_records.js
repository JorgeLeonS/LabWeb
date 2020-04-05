
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('records').del()
    .then(function () {
      // Inserts seed entries
      return knex('records').insert([
        {name: 'Turn On The Bright Lights', artist: 'Interpol', year: '2002'},
        {name: 'Kill the Moonlight', artist: 'Spoon', year: '2002'},
        {name: 'Late Registration', artist: 'Kanye West', year: '2005'},
        {name: 'Sound of Silver', artist: 'LCD Soundsystem', year: '2007'},
        {name: 'Illinois', artist: 'Sufjan Stevens', year: '2005'},
        {name: 'Silent Shout', artist: 'The Knife', year: '2006'},
        {name: 'Merriweather Post Pavilion', artist: 'Animal Collective', year: '2009'},
        {name: 'Stankonia', artist: 'Outkast', year: '2000'},
        {name: 'White Blood Cells', artist: 'The White Stripe', year: '2001'},
        {name: 'Supreme Clientele', artist: 'Ghostface Killah', year: '2000'},
        {name: 'Since I Left You', artist: 'The Avalanches', year: '2001'},
        {name: 'Person Pitch', artist: 'Panda Bear', year: '2007'},
        {name: 'Agaetis Byrjun', artist: 'Sigur Rós', year: '2000'},
        {name: 'Is This It', artist: 'The Strokes', year: '2000'},
        {name: 'The Moon & Antarctica', artist: 'Modest Mouse', year: '2000'},
        {name: 'The Blueprint', artist: 'Jay-Z', year: '2001'},
        {name: 'Yankee Hotel Foxtrot', artist: 'Wilco', year: '2000'},
        {name: 'Discovery', artist: 'Daft Punk', year: '2001'},
        {name: 'Funeral', artist: 'Arcade Fire', year: '2004'},
        {name: 'Kid A', artist: 'Radiohead', year: '2000'},
      ]);
    });
};
