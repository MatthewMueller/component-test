function cloud(runner) {
  var failed = [];

  runner.on('fail', function(test, err){
    failed.push({
      title: test.title,
      fullTitle: test.fullTitle(),
      error: {
        message: err.message,
        stack: err.stack
      }
    });
  });

  runner.on('end', function(){
    runner.stats.failed = failed;
    global.mochaResults = runner.stats;
  });
};
