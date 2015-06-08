/* 
 * jubo-keyboard
 * http://jubolin.com
 *
*/

"use strict";

var DDPClient = require('ddp');
var Cylon = require('cylon');

var ddp = new DDPClient({
  host: 'localhost',
  port: 3000,
  ssl: false,
  autoReconnect: true,
  autoReconnectTimer: 500,
  maintainCollections: true,
  ddpVersion: '1',
});

ddp.connect(function(error,wasReconnect) {
  if(error) {
    console.log('Connect to jubo error!');
    return;
  }

  if(wasReconnect) {
    console.log('Reconnect to jubo.');
  }

  console.log('Successfully connected to the jubo');

  var thingid;
  var keyboard = {
    about: {
      name: 'keyboard',
      type: 'sensor',
      location: 'home.study',
      description: 'keyboard'
    },

    connector: 'ddp',
    controller: 'default',
    icon: 'sensor-gesture.svg',
    properties: [
      {service: 'typer',property: 'zone-1',value: '1'},
      {service: 'typer',property: 'zone-2',value: '2'},
      {service: 'typer',property: 'zone-3',value: '3'},
      {service: 'typer',property: 'zone-4',value: '4'},
      {service: 'typer',property: 'zone-5',value: '5'},
      {service: 'typer',property: 'zone-6',value: '6'},
      {service: 'typer',property: 'zone-7',value: '7'}
    ]
  };

  ddp.call('add',[keyboard],
    function(error,tid) {
      console.log('add keyboard ',tid);
      var zone = {};
      zone.devid = tid;
      thingid = tid;
    

    Cylon.robot({
      connections: {
        keyboard: {adaptor: 'keyboard'}
      },

      devices: {
        keyboard: {driver: 'keyboard'}
      },

      work: function(my) {
        my.keyboard.on('q',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-1';
          zone.value = 'q';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('q pressed');
          });
        });

        my.keyboard.on('a',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-1';
          zone.value = 'a';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('a pressed');
          });
        });

        my.keyboard.on('z',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-1';
          zone.value = 'z';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('z pressed');
          });
        });

        my.keyboard.on('w',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-2';
          zone.value = 'w';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('w pressed');
          });
        });

        my.keyboard.on('s',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-2';
          zone.value = 's';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('s pressed');
          });
        });

        my.keyboard.on('x',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-2';
          zone.value = 'x';
          ddp.call('adjust',[zone],function(error,pid) {
            console.log('x pressed');
          });
        });

        my.keyboard.on('e',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-3';
          zone.value = 'e';
          ddp.call('adjust',[zone],function(error,pid) {
            console.log('e pressed');
          });
        });

        my.keyboard.on('d',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-3';
          zone.value = 'd';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('d pressed');
          });
        });

        my.keyboard.on('c',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-3';
          zone.value = 'a';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('c pressed');
          });
        });

        my.keyboard.on('r',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-4';
          zone.value = 'r';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('r pressed');
          });
        });

        my.keyboard.on('f',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-4';
          zone.value = 'f';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('f pressed');
          });
        });

        my.keyboard.on('v',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-4';
          zone.value = 'v';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('v pressed');
          });
        });

        my.keyboard.on('t',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-5';
          zone.value = 't';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('t pressed');
          });
        });

        my.keyboard.on('g',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-5';
          zone.value = 'g';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('g pressed');
          });
        });

        my.keyboard.on('b',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-5';
          zone.value = 'b';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('b pressed');
          });
        });

        my.keyboard.on('y',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-6';
          zone.value = 'y';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('y pressed');
          });
        });

        my.keyboard.on('h',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-6';
          zone.value = 'h';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('h pressed');
          });
        });

        my.keyboard.on('n',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-6';
          zone.value = 'n';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('n pressed');
          });
        });

        my.keyboard.on('u',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-7';
          zone.value = 'u';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('u pressed');
          });
        });

        my.keyboard.on('j',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-7';
          zone.value = 'j';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('j pressed');
          });
        });

        my.keyboard.on('m',function(key) {
          zone.service = 'typer';
          zone.property = 'zone-7';
          zone.value = 'm';

          ddp.call('adjust',[zone],function(error,pid) {
            console.log('m pressed');
          });
        });
      }
    }).start();
  });
});



