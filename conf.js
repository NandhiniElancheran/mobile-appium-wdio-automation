const path = require('path');
//const opener = require('opener');
const Reporting = require('perfecto-reporting');
var reportingClient;
// 1. Replace <<cloud name>> with your perfecto cloud name (e.g. demo is the cloudName of demo.perfectomobile.com).
const host = 'trial';
// 2. Replace <<security token>> with your perfecto security token.
const securityToken = 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2ZDM2NmJiNS01NDAyLTQ4MmMtYTVhOC1kODZhODk4MDYyZjIifQ.eyJpYXQiOjE2Nzk0MjI2NzUsImp0aSI6IjYwZjkwMjhhLWMxYjgtNDAxNS04OWFmLTY1M2FjNjljMDRjNSIsImlzcyI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsImF1ZCI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsInN1YiI6IjM0OTRkYmMwLTc4OTktNDJlYS05N2M4LWEyZDcwN2JmOTI1OSIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvZmZsaW5lLXRva2VuLWdlbmVyYXRvciIsIm5vbmNlIjoiN2NhYTliYTctZDE1MS00ODBjLThjYTMtMjQ3YzIyZDg3Y2NmIiwic2Vzc2lvbl9zdGF0ZSI6ImQ0ZTMwNDY1LWY1YjktNGUxNC05Y2QyLTI0YjkwZTMyNjM0OCIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgZW1haWwifQ._HI4pLEZ8fGaeTWqPsjv0pd5v6e-nVl-4P11_KW3ptA';

//Define your global tags here:
const tags = ['SampleTag1'];
global.STEP_TIMEOUT = 900000;
global.IMPLICIT_TIMEOUT = 5000;
global.progressBar = new ProgressBar(10);

exports.config = {
    securityToken: securityToken,
    protocol: 'http',
    hostname: 'trial.perfectomobile.com',
    path: '/nexperience/perfectomobile/wd/hub',
    port: 80,
    sync: true,
    bail: 0,
    exclude: [],
    specs: [
        './test/specs/addMoney.test.js'
    ],
    maxInstances: 1,

    capabilities: [
        {
            securityToken: securityToken,
            automationName: 'Appium',
            // 3. Set device capabilities.
            platformName: 'Android',
         //   platformVersion: '13',
            model: 'Galaxy S.*|LG.*',
          //  manufacturer: 'Google',
           // model: 'Pixel 4A \\(5G\\)',

            // 4. Set Perfecto Media repository path of App under test.
            app: "PRIVATE:test/application.apk", //  path.resolve('application.apk'), //'./test/app/android/application.apk',

            // 5. Set the unique identifier of your app
            appPackage: 'com.pyypl.dev',

            autoLaunch: true, // Whether to have Appium install and launch the app automatically.
            autoInstrument: true, // To work with hybrid applications, install the iOS/Android application as instrumented.
            // fullReset: false, // Reset app state by uninstalling app
            browserName: '',
            takesScreenshot: false,
            screenshotOnError: true,
            openDeviceTimeout: 5,
            'waitForAvailableLicense': true,
            openDeviceTimeout: 5


           // 'deviceName': '0B031JECB13124',
        },
    ],
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    // Default request retries count
    connectionRetryCount: 3,
    
    framework: 'mocha',
    mochaOpts: {
        timeout: 80000
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 80000
    },
    
    reporters: ['spec'],

    // Set log level to 'error'
    logLevel: 'error',
    logLevels: {
        webdriver: 'error',
        webdriverio: 'error',
        '@wdio/local-runner': 'error',
        '@wdio/cli': 'error'
    },

    //
    // =====
    // Hooks
    // =====
    // Gets executed just before initializing the webdriver session.
    beforeSession: function (config, capabilities, specs) {
        // Update progress to the first step
        setTimeout(() => {
            global.progressBar.step();
        }, 2000, global);
    },
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    before: function (capabilities, specs) {
        if (process.env.jobName != null) {
            reportingClient = new Reporting.Perfecto.PerfectoReportingClient(new Reporting.Perfecto.PerfectoExecutionContext({
                webdriver: {
                    executeScript: (command, params) => {
                        return browser.execute(command, params);
                    }
                },
                job: new Reporting.Model.Job({
                    jobName: process.env.jobName,
                    buildNumber: parseInt(process.env.jobNumber)
                }),
                tags: tags
            }));
        } else {
            reportingClient = new Reporting.Perfecto.PerfectoReportingClient(new Reporting.Perfecto.PerfectoExecutionContext({
                webdriver: {
                    executeScript: (command, params) => {
                        return browser.execute(command, params);
                    }
                },
                tags: tags
            }));
        }

        browser.reportingClient = reportingClient;
        browser.progressBar = global.progressBar;
        browser.setTimeout({ 'implicit': 5000 })

        var myReporter = {
            specStarted: function (result) {
                reportingClient.testStart(result.fullName);
            },
            specDone: async function (result) {
                if (result.status === 'failed') {
                    const failure = await result.failedExpectations[result.failedExpectations.length - 1];
                    await reportingClient.testStop({
                        status: Reporting.Constants.results.failed,
                        message: `${failure.message} ${failure.stack}`
                    });
                } else {
                    await reportingClient.testStop({
                        status: Reporting.Constants.results.passed
                    });
                }
            }
        }
       // jasmine.getEnv().addReporter(myReporter);
    },
    // Gets executed right after terminating the webdriver session.
    afterSession: async function (config, capabilities, specs) {
        const reportURL = browser.capabilities['testGridReportUrl'] + "&onboardingJourney=automated&onboardingDevice=nativeApp";

        // Launch browser with the Report URL
        browser.progressBar.finish();
        //opener(reportURL);
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for report url to open

        console.log(`\n\nOpen this link to continue with the guide: ${reportURL}\n`);
    }
}

function ProgressBar(numSteps) {
    this.currentStep = 0;
    this.tickSize = 5;
    this.paddingSize = 21;
    this.totalSteps = numSteps;

    this.step = function() {
        this.setProgress(this.currentStep + 1);
    }

    this.finish = function() {
        this.setProgress(this.totalSteps);
    }

    this.setProgress = function (value) {
        const repeatCharacter = (character, times) => character.repeat(times)

        if (this.currentStep === 0 || this.currentStep === this.totalSteps) {
            process.stdout.write('\n\n');
        }

        this.currentStep = value;
        const completed = repeatCharacter('=', this.currentStep * this.tickSize);
        const remaining = repeatCharacter(' ', (this.totalSteps - this.currentStep) * this.tickSize);
        const progress = parseInt(this.currentStep / this.totalSteps * 100) + '%';
        const padding = repeatCharacter(' ', this.paddingSize);
        process.stdout.write(`\r[${completed}${remaining}] ${progress}${padding}`);
    }
}
