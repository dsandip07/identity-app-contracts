var Backup = artifacts.require('Backup');

contract('Backup', function(accounts) {
  
    it("Set a key/value", function() {
      return Backup.deployed().then(function(instance) {
        return instance.set(accounts[1], "v1", {from: accounts[0]});
      }).then(function(result) {
        for (var i=0; i < result.logs.length; i++) {
          var log = result.logs[i];
          if (log.event == 'Set') {
            console.log ('Set event was emitted: (' + log.args.issuer + ',' + log.args.key + ',' + log.args.value + ')');
            break;
          }
        }
      }).catch (function(err) {
        console.log ('Error: ' + err);
      });
    });

    it("Get key", function() {
        return Backup.deployed().then(function(instance) {
          return instance.get.call(accounts[1]);
        }).then(function(value) {
          assert.equal(value, 'v1', "Got incorrect value");
        });
      });
  
  });