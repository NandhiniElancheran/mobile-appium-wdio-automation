const readline = require('readline');

const platformName = [];

exports.getCapabilities = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

    rl.question("Enter Platform Name: ", (platformNameValue) => {
        /* rl.question("Enter Platform Version: ", (platformVersion) => {
            rl.question("Enter Device Name: ", (deviceName) => { */
                const obj = {
                    platformNameValue: platformNameValue,
                   // platformVersion: platformVersion,
                  //  deviceName: deviceName
                };

               return platformName.push(obj);
              //  rl.close();
         /*    });
        }); */
    });
}

/* const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the platform name which you want to execute test scripts (andorid/ios): ', function(platformName) {
  console.log(`Platform Name entered: ${platformName}`);
  rl.question('Enter the platform version which you want to execute test scripts : ', function(platformVersion) {
    console.log(`Platform version entered: ${platformVersion}`);
    rl.close();
  });
});
 */

