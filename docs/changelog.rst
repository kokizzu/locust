####################
Changelog Highlights
####################

For full details of changes, please see https://github.com/locustio/locust/releases or https://github.com/locustio/locust/blob/master/CHANGELOG.md

2.37.14
=======
* Web UI: Fix Chart Zoom Slider https://github.com/locustio/locust/pull/3174

2.37.13
=======
* Web UI: Shrink Bundle Size by https://github.com/locustio/locust/pull/3169
* Remove safe_name from /stats/requests response https://github.com/locustio/locust/pull/3171

2.37.12
=======
* Attempt to increase open file limit (RLIMIT_NOFILE) even on master https://github.com/locustio/locust/pull/3162

2.37.11
=======
* Web UI: Always Warn of Invalid Host https://github.com/locustio/locust/pull/3155
* locust-cloud: bump minimum version and support multiple locustfiles https://github.com/locustio/locust/pull/3157 / https://github.com/locustcloud/locust-cloud/pull/38

2.37.10
=======
* Revert accidental removal of --json-file option https://github.com/locustio/locust/pull/3154

2.37.9
======
* Web UI: Fix host field name missing if host is not required https://github.com/locustio/locust/pull/3152

2.37.8
======
* Allow 25.x versions of gevent https://github.com/locustio/locust/pull/3151

2.37.7
======
* Web Ui: Add host field validation https://github.com/locustio/locust/pull/3149

2.37.6
======
* Doc updates, including a fix for config options https://github.com/locustio/locust/pull/3145
* Bumped minimum ConfigArgParse dependency to 1.7.1

2.37.5
======
* Locust Cloud: Stop requiring a locustfile when doing --login or --delete https://github.com/locustio/locust/pull/3141

2.37.4
======
* Bump minimum version of locust-cloud

2.37.3
======
* Webui: Warn on Missing Host https://github.com/locustio/locust/pull/3140

2.37.2
======
* Improve the performance of the `/stats/requests` endpoint when there are >500 unique request names https://github.com/locustio/locust/pull/3136
* Webui: Block starting test in distributed mode until workers have connected https://github.com/locustio/locust/pull/3138

2.37.1
======
* Fix --json-file https://github.com/locustio/locust/pull/3131

2.37.0
======
* Update uv to 0.7.2
* Add --json-file by https://github.com/locustio/locust/pull/3124
* Minor fixes

2.36.3
======
* Bump minimum locust-cloud version + some minor fixes

2.36.2
======
* Remove circular dependency between locust and locust-cloud https://github.com/locustio/locust/pull/3119

2.36.1
======
* Ensure correct version of gevent on Python 3.12

2.36.0
======
* Add locust-cloud as a dependency, so you can now run it using ``locust --cloud`` https://github.com/locustio/locust/pull/3097
* Various minor UI fixes & changes to build process https://github.com/locustio/locust/pull/3104, https://github.com/locustio/locust/pull/3107, https://github.com/locustio/locust/pull/3116
* Refactorings in main() https://github.com/locustio/locust/pull/3101, https://github.com/locustio/locust/pull/3102
* Narrow gevent version requirements to avoid incompatible new version for now https://github.com/locustio/locust/pull/3112

2.35.0
======
* Add profile argument and display in html report https://github.com/locustio/locust/pull/3093
* Various UI fixes and dependency updates

2.34.1
======
* Drop support for Python 3.9 https://github.com/locustio/locust/pull/3090

2.34.0
======
* Add experimental OpenAIUser and example https://github.com/locustio/locust/pull/3081
* Make the Locust UI Responsive and work for smaller screens https://github.com/locustio/locust/pull/3083, https://github.com/locustio/locust/pull/3086
* Tiny fixes & version bumps

2.33.2
======
* Optimize docker startup time https://github.com/locustio/locust/pull/3073
* Various dependency updates

2.33.1
======
* Fix html report file naming crash https://github.com/locustio/locust/pull/3072

2.33.0
======
* Press enter to automatically open web UI in browser https://github.com/locustio/locust/pull/3057
* Enable HTML Report Filename Parsing https://github.com/locustio/locust/pull/3049
* Various minor fixes and dependency updates

2.32.10
=======
* Use uv/hatch instead of Poetry https://github.com/locustio/locust/pull/3039

2.32.9
======
* Fix issue where empty WebUI property is not parsed correctly https://github.com/locustio/locust/pull/3012
* Add iter_lines method to FastHttpSession https://github.com/locustio/locust/pull/3024

2.32.8
======
* Fix a single broken link in the UI

2.32.7
======
* Fix readme image ref links by @changchaishi in https://github.com/locustio/locust/pull/3031
* Add tab showing `Locust Cloud <https://www.locust.cloud>`_ features https://github.com/locustio/locust/pull/3032
* Minor UI enhancements https://github.com/locustio/locust/pull/3035, https://github.com/locustio/locust/pull/3036, https://github.com/locustio/locust/pull/3037
* Code quality: Fix unused imports and switch on related ruff check https://github.com/locustio/locust/pull/3034

2.32.6
======
* Update Dockerfile to use Python 3.12 https://github.com/locustio/locust/pull/3029
* Remove deprecated --hatch-rate parameter https://github.com/locustio/locust/pull/3026

2.32.5
======
* Treat exceptions in init event handler as fatal https://github.com/locustio/locust/pull/3009
* FastHttpUser: Fix SSL certificate loading performance issue https://github.com/locustio/locust/pull/3013
* Delay CPU usage checks to make it less likely to generate false positives during process startup https://github.com/locustio/locust/pull/3014

2.32.4
======
* Minor doc updates https://github.com/locustio/locust/pull/2990, https://github.com/locustio/locust/pull/2989, https://github.com/locustio/locust/pull/2993
* UI fixes and dependency updates https://github.com/locustio/locust/pull/2992 https://github.com/locustio/locust/pull/2997, https://github.com/locustio/locust/pull/3002, https://github.com/locustio/locust/pull/2999
* Fix missing last requests in web UI https://github.com/locustio/locust/pull/3001

2.32.3
======
* Add option for Extra Options to be Required https://github.com/locustio/locust/pull/2981
* Use debug log level for first 5s of waiting for workers to be ready https://github.com/locustio/locust/pull/2982
* Ensure we never use old version of setuptools https://github.com/locustio/locust/pull/2988

2.32.2
======
* Better html report file names https://github.com/locustio/locust/pull/2947
* Fix Incorrectly Updating Stat History https://github.com/locustio/locust/pull/2972
* Various WebUI fixes (most only relevant for https://locust.cloud)

2.32.1
======
* Various WebUI fixes (most only relevant for https://locust.cloud)
* LocustBadStatusCode without url param in fasthttp https://github.com/locustio/locust/pull/2944

2.32.0
======
* Explicitly support Python 3.13 https://github.com/locustio/locust/pull/2939
* Log deprecation warning for Python 3.9 https://github.com/locustio/locust/pull/2940
* Decide if ipv6 can work (especially relevant for EKS) https://github.com/locustio/locust/pull/2923
* Various minor fixes

2.31.8
======
* Minor fixes, nothing worth mentioning.

2.31.7
======
* Log locust version earlier https://github.com/locustio/locust/pull/2904
* Improve Web UI Logging https://github.com/locustio/locust/pull/2911

2.31.6
======
* Various documentation and type hint fixes.
* Fix issue when using --config-users to set weight to 0 https://github.com/locustio/locust/pull/2891
* Add worker_count = 1 to LocalRunner for parity with MasterRunner https://github.com/locustio/locust/pull/2900/files
* Tiny WebUI fixes https://github.com/locustio/locust/pull/2901, https://github.com/locustio/locust/pull/2902

2.31.5
======
* WebUI: Correct types for form select https://github.com/locustio/locust/pull/2872
* Web UI Remove Scroll to Zoom https://github.com/locustio/locust/pull/2876
* Webui Remove chart initial data fetch https://github.com/locustio/locust/pull/2878
* Improved Build Pipeline https://github.com/locustio/locust/pull/2873, https://github.com/locustio/locust/pull/2879, https://github.com/locustio/locust/pull/2880

2.31.4
======
* Publish UI NPM package to simplify use from custom UIs (https://locust.cloud)
* Some tiny UI fixes

2.31.3
======
* Use new logo in web UI + some minor improvements https://github.com/locustio/locust/pull/2844, https://github.com/locustio/locust/pull/2840, https://github.com/locustio/locust/pull/2846, https://github.com/locustio/locust/pull/2850, https://github.com/locustio/locust/pull/2847, https://github.com/locustio/locust/pull/2855
* Update GitHub action versions https://github.com/locustio/locust/pull/2853

2.31.2
======
* Prebuild UI in PyPi publish steps so that even source distributions contain web UI code https://github.com/locustio/locust/pull/2839

2.31.1
======
* Fix issue with downloading HTML report https://github.com/locustio/locust/pull/2834

2.31.0
======
* Fix HTML Report Stats Table https://github.com/locustio/locust/pull/2817
* URL Directory, and Multi-File Support for Locustfile Distribution https://github.com/locustio/locust/pull/2766
* Various UI improvements https://github.com/locustio/locust/pull/2815, https://github.com/locustio/locust/pull/2804, https://github.com/locustio/locust/pull/2824, https://github.com/locustio/locust/pull/2825, https://github.com/locustio/locust/pull/2826, https://github.com/locustio/locust/pull/2828
* Fix docker image build https://github.com/locustio/locust/pull/2830

2.30.0
======
* FastHttpSession: Enable passing json as a positional argument for post() and stop converting response times to int https://github.com/locustio/locust/pull/2772
* New events for heartbeat and usage monitor https://github.com/locustio/locust/pull/2777
* SequentialTaskSet: Allow weighted tasks and dict in .tasks (experimental) https://github.com/locustio/locust/pull/2742
* Implement Poetry build system (mainly so we don't have to commit the built frontend resources to git) https://github.com/locustio/locust/pull/2725
* UI: Replace total avg response time with 50 percentile (avg was broken) https://github.com/locustio/locust/pull/2806
* Avoid deadlock in gevent/urllib3 connection pool (fixes occasional worker heartbeat timeouts) https://github.com/locustio/locust/pull/2813
* This release got no docker image due to a build error

2.29.1
======
* Add option to Skip Monkey Patching with LOCUST_SKIP_MONKEY_PATCH https://github.com/locustio/locust/pull/2765
* HttpSession requests typing https://github.com/locustio/locust/pull/2699
* Add proxy support for FastHttpUser https://github.com/locustio/locust/pull/2758

2.29.0
======
* Ensure spawning_complete only happens once on workers https://github.com/locustio/locust/pull/2728
* Correct time in the downloaded HTML report https://github.com/locustio/locust/pull/2729
* Add date and zoom to charts in web UI https://github.com/locustio/locust/pull/2731
* Send logs from workers to master and improve log viewer tab in the Web UI https://github.com/locustio/locust/pull/2750
* Docs: Upgrade Sphinx and theme, Fix API TOC, import wiki to docs, and mention installing Locust in Building the Docs

2.28.0
======
* Remove legacy UI https://github.com/locustio/locust/pull/2703
* Stop HTML escaping errors for /stats/requests endpoint https://github.com/locustio/locust/pull/2710
* Various minor UI & logging improvements

2.27.0
======
* Simplify how locustfiles are found (using -f). Don’t automatically append .py https://github.com/locustio/locust/pull/2655
* Use more efficient algorithm to calculate user distribution, and allow float weights https://github.com/locustio/locust/pull/2686
* Various minor fixes

2.26.0
======
* Drop support for Python 3.8
* Update geventhttpclient and adjust FastHttpUser max_retries / max_redirects (https://github.com/locustio/locust/pull/2676)
* Pin gevenhttpclient version (https://github.com/locustio/locust/pull/2682)

2.25.0
======
* Add functionality to run listener functions for `custom_messages` concurrently (https://github.com/locustio/locust/pull/2650)
* Update User Classes in Distributed Mode (https://github.com/locustio/locust/pull/2666)
* Log deprecation warning for --legacy-ui (https://github.com/locustio/locust/pull/2670)
* Fix UserClasses weight distribution with gcd (https://github.com/locustio/locust/pull/2663)

2.24.1
======
* Some documentation updates & minor fixes to UI
* Fixes to FastHttpUser content streaming (https://github.com/locustio/locust/pull/2642, https://github.com/locustio/locust/pull/2643)

2.24.0
======
* Pluggable dispatcher logic https://github.com/locustio/locust/pull/2606
* pyproject.toml support for Locust configuration file https://github.com/locustio/locust/pull/2612
* Minor fixes

2.23.1
======
* Fixes for locustfile download https://github.com/locustio/locust/pull/2599
* UI fixes https://github.com/locustio/locust/pull/2600 https://github.com/locustio/locust/pull/2601

2.23.0
======
* UI updates (https://github.com/locustio/locust/pull/2589, https://github.com/locustio/locust/pull/2590, https://github.com/locustio/locust/pull/2596)
* Locustfile distribution from master to worker https://github.com/locustio/locust/pull/2583
* Allow getting locust files from http urls https://github.com/locustio/locust/pull/2595
* Use exec_module() when loading locustfile instead of the deprecated load_module() https://github.com/locustio/locust/pull/2576

2.22.0
======
* Use Modern UI by default, remove --modern-ui and add --legacy-ui parameters https://github.com/locustio/locust/pull/2569

2.21.0
======
* Switch from flake8 + black to ruff for linting and formatting of code
* Update shape class' runner when Web UI picker is used by https://github.com/locustio/locust/pull/2534
* Web UI Modern Auth https://github.com/locustio/locust/pull/2538
* Customization Feature for Percentile Display on Statistics Page https://github.com/locustio/locust/pull/2550
* Allow User weight adjustment (and task selection) in UI when running with --class-picker, or on command line with --config-users argument https://github.com/locustio/locust/pull/2559
* Optimize memory usage when using --processes https://github.com/locustio/locust/pull/2564

2.20.1
======
* run_single_user improvements https://github.com/locustio/locust/pull/2519
* Support IPv6 for zmq connection between master and worker https://github.com/locustio/locust/pull/2521
* Modern UI: Update Vite to 4.5.1 https://github.com/locustio/locust/pull/2530
* Other tiny fixes

2.20.0
======
* Add event.measure context manager for simpler firing of request event (experimental) https://github.com/locustio/locust/pull/2511
* Various improvements to modern UI https://github.com/locustio/locust/pull/2491
* Various tiny fixes

2.19.1
======
* Create any directories as part of the CSV Prefix https://github.com/locustio/locust/pull/2481
* Dont suppress StopUser or GreenletExit in on_stop https://github.com/locustio/locust/pull/2486
* FastHttpUser: Detect response text encoding when no information is present in headers https://github.com/locustio/locust/pull/2485

2.19.0
======
* Add --processes parameter to automatically fork subprocesses for workers https://github.com/locustio/locust/pull/2472
* Automatically shut down workers if master goes missing for too long https://github.com/locustio/locust/pull/2474
* Update minimum version of various dependencies https://github.com/locustio/locust/pull/2476

2.18.4
======
* Various fixes to Modern UI
* Ensure to wait a second before next call to LoadTestShape's tick() https://github.com/locustio/locust/pull/2465

2.18.3
======
* Modern UI: Add sorting to columns on statistics page and downloaded report https://github.com/locustio/locust/pull/2453

2.18.2
======
* FastHttpUser: encoding return str when response is empty https://github.com/locustio/locust/pull/2451

2.18.1
======
* Add Log Viewer to Modern UI https://github.com/locustio/locust/pull/2440

2.18.0
======
* Add a modern web UI based on React, MaterialUI and Vite (activated using --modern-ui) https://github.com/locustio/locust/pull/2405
* Stop supporting Python 3.7 https://github.com/locustio/locust/pull/2421
* Fix too long first wait time for constant_pacing (and constant_throughput) https://github.com/locustio/locust/pull/2428

2.17.0
======
* Support user abstract load shape base classes https://github.com/locustio/locust/pull/2393
* Allow LoadShapes to reuse run-time, spawn-rate and users parameters https://github.com/locustio/locust/pull/2395
* Improve performance for statistics handling https://github.com/locustio/locust/pull/2410
* Test and explicitly support Python 3.12 https://github.com/locustio/locust/pull/2411

2.16.1
======
* Deprecate LOCUST_PLAYWRIGHT env var https://github.com/locustio/locust/pull/2378
* Import locust_plugins if available to give access to its custom command line arguments https://github.com/locustio/locust/pull/2379

2.16.0
======
* Add worker_connect event https://github.com/locustio/locust/pull/2344
* Allow selecting user classes using LOCUST_USER_CLASSES env var https://github.com/locustio/locust/pull/2355
* Web UI dropdown for custom args with choices https://github.com/locustio/locust/pull/2372
* Various minor fixes

2.15.1
======
* Add PERCENTILES_TO_CHART param in stats.py to make the Response Time Chart configurable https://github.com/locustio/locust/pull/2313

2.15.0
======
* Add is_secret option for custom args to be shown in the web UI masked https://github.com/locustio/locust/pull/2284
* Breaking change: Remove deprecated request_success and request_failure event handlers (unified request handler was introduced in 1.5) https://github.com/locustio/locust/pull/2306

2.14.2
======
* Re-add py.typed marker file to package (it was missing in 2.14.1) https://github.com/locustio/locust/pull/2282

2.14.1
======
* Add --json to send stats to stdout as json by @AndersSpringborg in https://github.com/locustio/locust/pull/2269

2.14.0
======
* Add rest method to FastHttpUser to facilitate easy REST/JSON API testing https://github.com/locustio/locust/pull/2274

2.13.2
======
* Fix: Ask worker to reconnect if master gets a broken RPC message by @marcinh in https://github.com/locustio/locust/pull/2271

2.13.1
======
* Document har2locust (auto generation of locustfiles from browser recordings) https://github.com/locustio/locust/pull/2259
* Dont reset connection to worker if master receives a corrupted zmq message by @marcinh in https://github.com/locustio/locust/pull/2266
* Other minor fixes

2.13.0
======
* Add the ability to set default_headers on FastHttpUser https://github.com/locustio/locust/pull/2231
* Web UI: URL link on the host name for easy navigation by @JonanOribe in https://github.com/locustio/locust/pull/2228
* Add support for time strings for --stop timeout (e.g. "5m30s") @cyberw in https://github.com/locustio/locust/pull/2239

2.12.1
======
* Allow setting run time from the web UI & http api by @ajt89 in https://github.com/locustio/locust/pull/2202
* Various fixes

2.12.0
======
* LoadTestShapes with custom user classes https://github.com/locustio/locust/pull/2181
* Minor fixes and bumped some dependencies

2.11.1
======
* Fix issue when editing user count while running a test using --class-picker https://github.com/locustio/locust/pull/2171
* Various minor logging fixes

2.11.0
======
* Allow passing multiple Locustfiles, allow selecting User and Shape class from the WebUI https://github.com/locustio/locust/pull/2137
* Add 'worker_index' to WorkerRunner https://github.com/locustio/locust/pull/2155
* Fix: Ensure new test starts with specified number of users after previous test has been stopped https://github.com/locustio/locust/pull/2152

2.10.2
======
* Fix for Flask 2.2.0 breaking changes https://github.com/locustio/locust/pull/2148

2.10.1
======
* Increase CONNECT_RETRY_COUNT to avoid workers giving up too soon if master is not up yet by https://github.com/locustio/locust/pull/2125

2.10.0
======
* Add ack for worker connection https://github.com/locustio/locust/pull/2077 (note that 2.10 workers will not work with a 2.9 master)
* add support for custom SSLContext when using FastHttpUser https://github.com/locustio/locust/pull/2113
* More robust handling of ZMQ/RPC errors https://github.com/locustio/locust/pull/2120 / https://github.com/locustio/locust/pull/2096
* Full Changelog https://github.com/locustio/locust/compare/2.9.0...2.10.0

2.9.0
=====

* FastHttpUser improvements (including a rename of parameter "url" to "path") https://github.com/locustio/locust/pull/2083
* Modernized build https://github.com/locustio/locust/pull/2070
* Drop support for Python 3.6 https://github.com/locustio/locust/pull/2080
* Add table linkage in UI https://github.com/locustio/locust/pull/2082
* Uniform style of stats/report ascii tables https://github.com/locustio/locust/pull/2084
* Remove explicit version requirement for jinja2 https://github.com/locustio/locust/pull/2090
* Rebalance users even when using fixed_count https://github.com/locustio/locust/pull/2093
* Avoid using incompatible pyzmq 23 https://github.com/locustio/locust/pull/2100

2.8.6
=====

* Support sharing connection pools between users https://github.com/locustio/locust/pull/2059
* Add cpu_warning event, so listeners can do some action when CPU usage is too high https://github.com/locustio/locust/pull/2067

2.8.5
=====

* Fix dependency: Dont use latest Jinja2 because it has breaking changes

2.8.4
=====

* New event: `test_stopping`, triggered just before stopping the test https://github.com/locustio/locust/pull/2033
* New event: `quit`, to enable getting the locust process exit code https://github.com/locustio/locust/pull/2049
* Fix users sometimes not being stopped correctly https://github.com/locustio/locust/pull/2041

2.8.3
=====

* Ensure users are distributed evently across hosts during ramp up https://github.com/locustio/locust/pull/2025 

2.8.2
=====

* Fix issue with permissions in docker image

2.8.1
=====

* Further optimize docker image (60MB compressed)

2.8.0
=====

* Shrink docker image significantly (95MB compressed size for x64 instead of 358MB) by basing the image on python3-slim instead of python3 
* Fix empty tasks section in UI and static report bug (really) https://github.com/locustio/locust/pull/2001

2.7.3
=====

* Fix 'Tasks' section remains empty in web ui https://github.com/locustio/locust/pull/1997

2.7.2
=====

* Fix an issue introduced in 2.7.1 that caused Locust to shut down when the UI stop was clicked https://github.com/locustio/locust/pull/1996

2.7.1
=====
* fix --html report in web mode https://github.com/locustio/locust/pull/1992

2.7.0
=====

* Add run_single_user and documentation on how to debug Users/locustfiles https://github.com/locustio/locust/pull/1985
* Fix "socket operation on non-socket" at shutdown, by reverting #1935 https://github.com/locustio/locust/pull/1991
* Fixing issue with incorrect "All users spawned" log messages https://github.com/locustio/locust/pull/1977

2.6.1
=====

* Documentation fixes only.

2.6.0
=====
* Pass --tags and --exclude-tags to workers. (https://github.com/locustio/locust/pull/1976)
* Clean up some logging messages (https://github.com/locustio/locust/pull/1973)
* Ensure heartbeat\_worker doesn't try to re-establish connection to workers when quit has been called (https://github.com/locustio/locust/pull/1972)
* fixed\_count: ability to spawn a specific number of users \(as opposed to just using weights\) (https://github.com/locustio/locust/pull/1964)

2.5.1
=====

* Ignore empty host field in web ui (Fix running the web UI with class defined hosts) (https://github.com/locustio/locust/pull/1956)
* Throw exception when calling response.success()/.failure() if with-block has not been entered (https://github.com/locustio/locust/pull/1955)
* Stop declaring "fake" class level variables in Environment, User and StatsEntry (https://github.com/locustio/locust/pull/1948)

2.5.0
=====

* Change request event 'url' parameter to contain full URL (technically a breaking change, but very few users will have had time to start using this) (https://github.com/locustio/locust/issues/1927)
* Suppress warnings for patch version mismatch between master and worker (https://github.com/locustio/locust/issues/1926)

2.4.3
=====

* Fix crash on windows (https://github.com/locustio/locust/issues/1924)

2.4.2
=====

* Add --expect-workers-max-wait parameter (https://github.com/locustio/locust/pull/1922)
* Track worker memory usage (https://github.com/locustio/locust/pull/1917)
* Other small fixes

2.4.1
=====

* Fix stat printing when using shapes (https://github.com/locustio/locust/pull/1907)

2.4.0
=====

* Add start_time and url parameters to request event. (https://github.com/locustio/locust/pull/1900)
* Support (and test) Python 3.10 (https://github.com/locustio/locust/pull/1901)
* Make User.run/TaskSet.run final and raise an exception if someone marks it as a task (https://github.com/locustio/locust/pull/1895)
* Release docker image for arm64. (https://github.com/locustio/locust/pull/1889)
* Automated change log generation is broken. Will fix this later, but until then you can look here: https://github.com/locustio/locust/compare/2.2.3...2.4.0

2.3.0
=====

* Accidentally increased version to 2.4 directly so there is no 2.3...

2.2.3
=====

* Fix issue with custom arguments in config file (when not running headless) (https://github.com/locustio/locust/pull/1888)
* Automated change log generation is broken. Will fix this later, but until then you can look here: https://github.com/locustio/locust/compare/2.2.2...2.2.3

2.2.2
=====

* Fix version in Docker builds
* Automated change log generation is broken. Will fix this later, but until then you can look here: https://github.com/locustio/locust/compare/2.2.1...2.2.2

2.2.1
=====

* Automated change log generation is broken. Will fix this later, but until then you can look here: https://github.com/locustio/locust/compare/2.2.0...2.2.1

2.2.0
=====

* Display locustfile and tasks ratio information on index.html
* Add --autostart and --autoquit parameters (https://github.com/locustio/locust/pull/1864)
* Add constant\_throughput wait time \(the inverse of constant\_pacing\)
* Alternative way to rename requests (particularly useful when using an SDK that wraps `requests`) (https://github.com/locustio/locust/pull/1858)
* Add --equal-weights flag (https://github.com/locustio/locust/pull/1842)
* HttpUser: Unpack known exceptions
* Various charting fixes
* Add FastHttpUser directly under locust package
* Auto-generate Locust's version number using setuptools\_scm and git tags 
* Show custom arguments in web ui and forward them to worker (https://github.com/locustio/locust/pull/1841)

2.1.0
=====

* Fix docker builds (2.0 never got pushed to Docker Hub)
* Bump dependency on pyzmq to fix out of memory issue on Windows
* Use 1 as default for user count and spawn rate in web UI start form
* Various documentation updates

2.0.0
=====

User ramp up/down and User type selection is now controlled by the master instead of autonomously by the workers 
----------------------------------------------------------------------------------------------------------------
This has allowed us to fix some issues with incorrect/skewed User type selection and undesired stepping of ramp up. The issues were especially visible when running many workers and/or using LoadShape:s. This change also allows redistribution of Users if a worker disconnects during a test. This is a major change internally in Locust so please let us know if you encounter any problems (particularly regarding ramp up pace, User distribution, CPU usage on master, etc)

Other potentially breaking API changes
--------------------------------------
* Change the default User weight to 1 instead of 10 (the old default made no sense)
* Fire test_start and test_stop events on workers too (previously they were only fired on master/standalone instances)
* Workers now send their version number to master. Master will warn about version differences, and pre 2.0-versions will not be allowed to connect at all (because they would not work anyway)
* Update Flask dependency to 2.0

Significant merged PR:s (and prerelease version they were introduced in)
------------------------------------------------------------------------
* Allow workers to bypass version check by sending -1 as version (2.0.0) https://github.com/locustio/locust/pull/1830
* Improve logging messages and clean up code after dispatch refactoring (2.0.0b4) https://github.com/locustio/locust/pull/1826
* Remove `user_classes_count` from heartbeat payload (2.0.0b4) https://github.com/locustio/locust/pull/1825
* Add option to set concurrency of FastHttpUser/Session (2.0.0b3) https://github.com/locustio/locust/pull/1812/
* Fire test_start and test_stop events on worker nodes (2.0.0b3) https://github.com/locustio/locust/pull/1777/
* Auto shrink request stats table to fit terminal (2.0.0b2) https://github.com/locustio/locust/pull/1811
* Refactoring of the dispatch logic to improve performance (2.0.0b2) https://github.com/locustio/locust/pull/1809 
* Check version of workers when they connect. Warn if there is a mismatch, refuse 1.x workers to connect (2.0.0b1) https://github.com/locustio/locust/pull/1805 
* Change the default User weight to 1 instead of 10 (2.0.0b1) https://github.com/locustio/locust/pull/1803
* Upgrade to Flask 2 (2.0.0b1) https://github.com/locustio/locust/pull/1764
* Move User selection responsibility from worker to master in order to fix unbalanced distribution of users and uneven ramp-up (2.0.0b0) https://github.com/locustio/locust/pull/1621

Some of these are not really that significant and may be removed from this list at a later time, once 2.0 has stabilised.

1.6.0
=====

* Allow cross process communication using custom messages https://github.com/locustio/locust/pull/1782
* Fix: status "stopped" instead of "spawning", tick\(\) method of LoadShape called only once https://github.com/locustio/locust/pull/1769

1.5.3
=====

* Fix an issue with custom Users calling request_success/_failure.fire() not being added to statistics https://github.com/locustio/locust/pull/1761

1.5.2
=====

* Pin version of flask to 1.1.2, fixing https://github.com/locustio/locust/issues/1759
* Fix issue with GRPC compatibility and add GRPC example to documentation https://github.com/locustio/locust/pull/1755
* Use time.perf_counter() to calculate elapsed times everywhere, should only matter for Windows https://github.com/locustio/locust/pull/1758

1.5.1
=====

* Fixed an issue with 1.5.0 where an extra parameter (start_time) was passed to request event https://github.com/locustio/locust/pull/1754

1.5.0
=====

* Unify request_success/request_failure into a single event called request (the old ones are deprecated but still work) https://github.com/locustio/locust/issues/1724
* Add the response object and context as parameters to the request event. context is used to forward information to the request event handler (can be used for things like username, tags etc)

1.4.4
=====

* Ensure runner.quit finishes even when users are broken https://github.com/locustio/locust/pull/1728
* Make runner / user count available to LoadTestShape https://github.com/locustio/locust/pull/1719
* Other small fixes

1.4.3
=====

* Fix bug that broke the tooltips for charts in the Web UI 

1.4.2
=====

* Multiple improvements for charting including tooltips etc
* Added --html option to save HTML report https://github.com/locustio/locust/pull/1637
* Lots of other small fixes

1.4.1
=====

* Fix 100% cpu usage when running in docker/non-tty terminal https://github.com/locustio/locust/issues/1629

1.4.0
=====

* You can now control user count from terminal while the test is running https://github.com/locustio/locust/pull/1612
* Infinite run time is now the default for command line runs https://github.com/locustio/locust/pull/1625
* wait_time now defaults to zero https://github.com/locustio/locust/pull/1626

1.3.2
=====

* List Python 3.9 as supported in the package/on PyPi
* Fix XSS vulnerability in the web UI (sounds important but really isn't, as Locust UI is not meant to be exposed to outside users)

1.3.1
=====

* Bump minimum required gevent version to 20.9.0 (latest), as the previous ones had sneaky binary incompatibilities with the latest version of greenlet ("RuntimeWarning: greenlet.greenlet size changed, may indicate binary incompatibility. Expected 144 from C header, got 152 from PyObject")

1.3.0
=====

* Breaking change: Remove step-load feature (now that we have LoadTestShape it is no longer needed)
* More type hints to enable better code completion and linting of locustfiles

Bug fixes: 

* LoadTestShape.get\_run\_time is not relative to start of test https://github.com/locustio/locust/issues/1557
* Refactor and fix delayed user stopping in combination with on\_stop https://github.com/locustio/locust/pull/1560
* runner.quit gets blocked by slow on stop https://github.com/locustio/locust/issues/1552
* Remove legacy code that was only needed for py2
* Lots more

1.2.3
=====

* Bug fix (TypeError: code() takes at least 14 arguments (13 given) (Werkzeug version issue) https://github.com/locustio/locust/issues/1545)
* Bug fix (Locust stuck in "Shape worker starting" when restarting a test from the webUI https://github.com/locustio/locust/issues/1540)
* Various linting fixes that *should* have no functional impact

1.2.2
=====

* Bug fix (LoadTestShape in headless mode https://github.com/locustio/locust/pull/1539)

1.2.1
=====

* Bug fix (StatsEntry.use_response_times_cache must be set to True, https://github.com/locustio/locust/issues/1531)

1.2
===

* Rename hatch rate to spawn rate (the --hatch-rate parameter is only deprecated, but the hatch_complete event has been renamed spawning_complete)
* Ability to generate any custom load shape with LoadTestShape class
* Allow ramping down of users
* Ability to use save custom percentiles
* Improve command line stats output
* Bug fixes (excessive precision of metrics in losust csv stats, negative response time when system clock has changed, issue with non-string failure messages, some typos etc)
* Documentation improvements

1.1.1
=====

* --run-time flag is not respected if there is an exception in a test_stop listener
* FastHttpUser: Handle stream ended at an unexpected time and UnicodeDecodeError. Show bad/error status codes on failures page.
* Improve logging when locust master port is busy

1.1
===

* The official Docker image is now based on the ``python:3.8`` image instead of ``python:3.8-alpine``. This should 
  make it easier to install other python packages when extending the locust docker image.
* Allow Users to stop the runner by calling self.environment.runner.quit() (without deadlocking sometimes)
* Cut to only 5% free space on the top of the graphs
* Use csv module to generate csv data (solves issues with sample names that need escaping in csv)
* Various documentation improvements

1.0.3
=====

* Ability to control the exit code of the Locust process by setting :py:attr:`Environment.process_exit_code <locust.env.Environment.process_exit_code>`
* FastHttpLocust: Change dependency to use original geventhttpclient (now that releases can be made there) instead of geventhttpclient-wheels
* Fix search on readthedocs

1.0.2
=====

* Check for low open files limit (ulimit) and try to automatically increase it from within the locust process.
* Other various bug fixes as improvements


.. _changelog-1-0:

1.0, 1.0.1
==========

This version contains some breaking changes.

Locust class renamed to User
----------------------------

We've renamed the ``Locust`` and ``HttpLocust`` classes to ``User`` and ``HttpUser``. The ``locust`` attribute on 
:py:class:`TaskSet <locust.TaskSet>` instances has been renamed to :py:attr:`user <locust.TaskSet.user>`.

The parameter for setting number of users has also been changed, from ``-c`` / ``--clients`` to ``-u`` / ``--users``.

Ability to declare @task directly under the ``User`` class
----------------------------------------------------------

It's now possible to declare tasks directly under a User class like this:

.. code-block:: python

    class WebUser(User):
        @task
        def some_task(self):
            pass

In tasks declared under a User class (e.g. ``some_task`` in the example above), ``self`` refers to the User 
instance, as one would expect. For tasks defined under a :py:class:`TaskSet <locust.TaskSet>` class, ``self`` 
would refer to the ``TaskSet`` instance.

The ``task_set`` attribute on the ``User`` class (previously ``Locust`` class) has been removed. To declare a 
``User`` class with a single ``TaskSet`` one would now use the :py:attr:`tasks <locust.User.tasks>`
attribute instead:

.. code-block:: python

    class MyTaskSet(TaskSet):
        ...
    
    class WebUser(User):
        tasks = [MyTaskSet]


Task tagging
------------

A new :ref:`tag feature <tagging-tasks>` has been added that makes it possible to include/exclude tasks during 
a test run.

Tasks can be tagged using the :py:func:`@tag <locust.tag>` decorator:

.. code-block:: python

    class WebUser(User):
        @task
        @tag("tag1", "tag2")
        def my_task(self):
            ...

And tasks can then be specified/excluded using the ``--tags``/``-T`` and ``--exclude-tags``/``-E`` command line arguments. 


Environment variables changed
-----------------------------

The following changes has been made to the configuration environment variables

* ``LOCUST_MASTER`` has been renamed to ``LOCUST_MODE_MASTER`` (in order to make it less likely to get variable name collisions 
  when running Locust in Kubernetes/K8s which automatically adds environment variables depending on service/pod names).
* ``LOCUST_SLAVE`` has been renamed to ``LOCUST_MODE_WORKER``.
* ``LOCUST_MASTER_PORT`` has been renamed to ``LOCUST_MASTER_NODE_PORT``.
* ``LOCUST_MASTER_HOST`` has been renamed to ``LOCUST_MASTER_NODE_HOST``.
* ``CSVFILEBASE`` has been renamed to ``LOCUST_CSV``.

See the :ref:`configuration` documentation for a full list of available :ref:`environment variables <environment-variables>`.


Other breaking changes
----------------------

* The master/slave terminology has been changed to master/worker. Therefore the command line arguments ``--slave`` and
  ``--expect-slaves`` has been renamed to ``--worker`` and ``--expect-workers``.
* The option for running Locust without the Web UI has been renamed from ``--no-web`` to ``--headless``.
* Removed ``Locust.setup``, ``Locust.teardown``, ``TaskSet.setup`` and ``TaskSet.teardown`` hooks. If you want to 
  run code at the start or end of a test, you should instead use the :py:attr:`test_start <locust.event.Events.test_start>`
  and :py:attr:`test_stop <locust.event.Events.test_stop>` events:
  
  .. code-block:: python
  
      from locust import events
      
      @events.test_start.add_listener
      def on_test_start(**kw):
          print("test is starting")
        
      @events.test_stop.add_listener
      def on_test_start(**kw):
          print("test is stopping")
* ``TaskSequence`` and ``@seq_task`` has been replaced with :ref:`SequentialTaskSet <sequential-taskset>`.
* A ``User count`` column has been added to the history stats CSV file. The column order and column names has been changed.
* The official docker image no longer uses a shell script with a bunch of special environment variables to configure how 
  how locust is started. Instead, the ``locust`` command is now set as ``ENTRYPOINT`` of the docker image. See
  :ref:`running-in-docker` for more info.
* Command line option ``--csv-base-name`` has been removed, since it was just an alias for ``--csv``.
* The way Locust handles logging has been changed. We no longer wrap stdout (and stderr) to automatically make print 
  statements go into the log. ``print()`` statements now only goes to stdout. To add custom entries to the log, one 
  should now use the Python logging module:
  
  .. code-block:: python
  
      import logging
      logging.info("custom logging message)
  
  For more info see :ref:`logging`


Web UI improvements
-------------------

* It's now possible to protect the Web UI with Basic Auth using the ``--web-auth`` command line argument.
* The Web UI can now be served over HTTPS by specifying a TLS certificate and key with the ``--tls-cert`` 
  and ``--tls-key`` command line arguments.
* If the number of users and hatch rate are specified on command line, it's now used to pre-populate the input fields in 
  the Web UI.



Other fixes and improvements
----------------------------

* Added ``--config`` command line option for specifying a :ref:`configuration file <configuration-file>` path
* The code base has been refactored to make it possible to run :ref:`Locust as a python lib <use-as-lib>`. 
* It's now possible to call ``response.failure()`` or ``response.success()`` multiple times when using 
  the ``catch_response=True`` in the HTTP clients. Only the last call to ``success``/``failure`` will count.
* The ``--help`` output has been improved by grouping related options together.



0.14.6
======

* Fix bug when running with latest Gevent version, and pinned the latest version


0.14.0
======

* Drop Python 2 and Python 3.5 support!
* Continuously measure CPU usage and emit a warning if we get a five second average above 90%
* Show CPU usage of slave nodes in the Web UI
* Fixed issue when running Locust distributed and new slave nodes connected during the hatching/ramp-up 
  phase (https://github.com/locustio/locust/issues/1168)


0.13.5
======

Various minor fixes, mainly regarding FastHttpLocust.

0.13.4
======

Identical to previous version, but now built & deployed to Pypi using Travis.

0.13.3
======

* Unable to properly connect multiple slaves - https://github.com/locustio/locust/issues/1176
* Zero exit code on exception - https://github.com/locustio/locust/issues/1172
* `--stop-timeout` is not respected when changing number of running Users in distributed mode - https://github.com/locustio/locust/issues/1162

0.13.2
======

* Fixed bug that broke the Web UI's response time graph

0.13.1
======

* Fixed crash bug on Python 3.8.0
* Various other bug fixes and improvements.


0.13.0
======

* New API for specifying wait time - https://github.com/locustio/locust/pull/1118

  Example of the new API::

      from locust import HttpLocust, between
      class User(HttpLocust):
          # wait between 5 and 30 seconds
          wait_time = between(5, 30)

  There are three built in :ref:`wait time functions <wait_time_functions>`: :py:func:`between <locust.wait_time.between>`,
  :py:func:`constant <locust.wait_time.constant>` and :py:func:`constant_pacing <locust.wait_time.constant_pacing>`.

* FastHttpLocust: Accept self signed SSL certificates, ignore host checks. Improved response code handling
* Add current working dir to sys.path - https://github.com/locustio/locust/pull/484
* Web UI improvements: Added 90th percentile to table, failure per seconds as a series in the chart
* Ability to specify host in web ui
* Added response_length to request_failure event - https://github.com/locustio/locust/pull/1144
* Added p99.9 and p99.99 to request stats distribution csv - https://github.com/locustio/locust/pull/1125
* Various other bug fixes and improvements.

0.12.2
======

* Added `--skip-log-setup` to disable Locust's default logging setup.
* Added `--stop-timeout` to allow tasks to finish running their iteration before stopping
* Added 99.9 and 99.99 percentile response times to csv output
* Allow custom clients to set request response time to None. Those requests will be excluded
  when calculating median, average, min, max and percentile response times.
* Renamed the last row in statistics table from "Total" to "Aggregated" (since the values aren't
  a sum of the individual table rows).
* Some visual improvements to the web UI.
* Fixed issue with simulating fewer number of locust users than the number of slave/worker nodes.
* Fixed bugs in the web UI related to the fact that the stats table is truncated at 500 entries.
* Various other bug fixes and improvements.


0.12.1
======

* Added new :code:`FastHttpLocust` class that uses a faster HTTP client, which should be 5-6 times faster
  than the normal :code:`HttpLocust` class. For more info see the documentation on :ref:`increasing performance <increase-performance>`.
* Added ability to set the exit code of the locust process when exceptions has occurred within the user code,
  using the :code:`--exit-code-on-error` parameter.
* Added TCP keep alive to master/slave communication sockets to avoid broken connections in some environments.
* Dropped support for Python 3.4
* Numerous other bug fixes and improvements.


0.10.0
======

* Python 3.7 support
* Added a status page to the web UI when running Locust distributed showing the status of slave nodes
  and detect down slaves using heartbeats
* Numerous bugfixes/documentation updates (see detailed changelog)


0.9.0
=====

* Added detailed changelog (https://github.com/locustio/locust/blob/master/CHANGELOG.md)
* Numerous bugfixes (see detailed changelog)
* Added sequential task support - https://github.com/locustio/locust/pull/827
* Added support for user-defined wait_function - https://github.com/locustio/locust/pull/785
* By default, Locust no longer resets the statistics when the hatching is complete.
  Therefore :code:`--no-reset-stats` has been deprecated (since it's now the default behavior),
  and instead a new :code:`--reset-stats` option has been added.
* Dropped support for Python 3.3
* Updated documentation

0.8.1
=====

* Updated pyzmq version, and changed so that we don't pin a specific version.
  This makes it easier to install Locust on Windows.


0.8
===

* Python 3 support
* Dropped support for Python 2.6
* Added :code:`--no-reset-stats` option for controlling if the statistics should be reset once
  the hatching is complete
* Added charts to the web UI for requests per second, average response time, and number of
  simulated users.
* Updated the design of the web UI.
* Added ability to write a CSV file for results via command line flag
* Added the URL of the host that is currently being tested to the web UI.
* We now also apply gevent's monkey patching of threads. This fixes an issue when
  using Locust to test Cassandra (https://github.com/locustio/locust/issues/569).
* Various bug fixes and improvements


0.7.5
=====

* Use version 1.1.1 of gevent. Fixes an install issue on certain versions of python.


0.7.4
=====

* Use a newer version of requests, which fixed an issue for users with older versions of
  requests getting ConnectionErrors (https://github.com/locustio/locust/issues/273).
* Various fixes to documentation.


0.7.3
=====

* Fixed bug where POST requests (and other methods as well) got incorrectly reported as
  GET requests, if the request resulted in a redirect.
* Added ability to download exceptions in CSV format. Download links has also been moved
  to its own tab in the web UI.


0.7.2
=====

* Locust now returns an exit code of 1 when any failed requests were reported.
* When making an HTTP request to an endpoint that responds with a redirect, the original
  URL that was requested is now used as the name for that entry in the statistics (unless
  an explicit override is specified through the *name* argument). Previously, the last
  URL in the redirect chain was used to label the request(s) in the statistics.
* Fixed bug which caused only the time of the last request in a redirect chain to be
  included in the reported time.
* Fixed bug which caused the download time of the request body not to be included in the
  reported response time.
* Fixed bug that occurred on some linux dists that were tampering with the python-requests
  system package (removing dependencies which requests is bundling). This bug only occurred
  when installing Locust in the python system packages, and not when using virtualenv.
* Various minor fixes and improvements.


0.7.1
=====

* Exceptions that occurs within TaskSets are now caught by default.
* Fixed bug which caused Min response time to always be 0 after all locusts had been hatched
  and the statistics had been reset.
* Minor UI improvements in the web interface.
* Handle messages from "zombie" slaves by ignoring the message and making a log entry
  in the master process.



0.7
===

HTTP client functionality moved to HttpLocust
---------------------------------------------

Previously, the Locust class instantiated a :py:class:`HttpSession <locust.clients.HttpSession>`
under the client attribute that was used to make HTTP requests. This functionality has
now been moved into the :py:class:`HttpLocust <locust.core.HttpLocust>` class, in an
effort to make it more obvious how one can use Locust to
:doc:`load test non-HTTP systems <testing-other-systems>`.

To make existing locust scripts compatible with the new version you should make your
locust classes inherit from HttpLocust instead of the base Locust class.


msgpack for serializing master/slave data
-----------------------------------------

Locust now uses `msgpack <http://msgpack.org/>`_ for serializing data that is sent between
a master node and its slaves. This addresses a possible attack that can be used to execute
code remote, if one has access to the internal locust ports that are used for master-slave
communication. The reason for this exploit was due to the fact that pickle was used.

.. warning::

    Anyone who uses an older version should make sure that their Locust machines are not publicly
    accessible on port 5557 and 5558. Also, one should never run Locust as root.

Anyone who uses the :py:class:`report_to_master <locust.events.report_to_master>` and
:py:class:`slave_report <locust.events.slave_report>` events, needs to make sure that
any data that is attached to the slave reports is serializable by msgpack.

requests updated to version 2.2
-------------------------------

Locust updated `requests <http://python-requests.org/>`_ to the latest major release.

.. note::

   Requests 1.0 introduced some major API changes (and 2.0 just a few). Please check if you
   are using any internal features and check the documentation:
   `Migrating to 1.x <http://docs.python-requests.org/en/latest/api/#migrating-to-1-x>`_ and
   `Migrationg to 2.x <http://docs.python-requests.org/en/latest/api/#migrating-to-2-x>`_

gevent updated to version 1.0
-------------------------------

gevent 1.0 has now been released and Locust has been updated accordingly.

Big refactoring of request statistics code
------------------------------------------

Refactored :py:class:`RequestStats`.

* Created :py:class:`StatsEntry` which represents a single stats entry (URL).

Previously the :py:class:`RequestStats` was actually doing two different things:

* It was holding track of the aggregated stats from all requests
* It was holding the stats for single stats entries.

Now RequestStats should be instantiated and holds the global stats, as well as a dict of StatsEntry instances which holds the stats for single stats entries (URLs)

Removed support for avg_wait
----------------------------

Previously one could specify avg_wait to :py:class:`TaskSet` and :py:class:`Locust` that Locust would try to strive to. However this can be sufficiently accomplished by using min_wait and max_wait for most use-cases. Therefore we've decided to remove the avg_wait as its use-case is not clear or just too narrow to be in the Locust core.

Removed support for ramping
----------------------------

Previously one could tell Locust, using the --ramp option, to try to find a stable client count that the target host could handle, but it's been broken and undocumented for quite a while so we've decided to remove it from the locust core and perhaps have it reappear as a plugin in the future.


Locust Event hooks now takes keyword argument
---------------------------------------------

When :doc:`extending-locust` by listening to :ref:`events`, the listener functions should now expect
the arguments to be passed in as keyword arguments. It's also highly recommended to add an extra
wildcard keyword arguments to listener functions, since they're then less likely to break if extra
arguments are added to that event in some future version. For example::

    from locust import events

    def on_request(request_type, name, response_time, response_length, **kw):
        print "Got request!"

    locust.events.request_success += on_request

The *method* and *path* arguments to :py:obj:`request_success <locust.events.request_success>` and
:py:obj:`request_failure <locust.events.request_failure>` are now called *request_type* and *name*,
since it's less HTTP specific.


Other changes
-------------

* You can now specify the port on which to run the web host
* Various code cleanups
* Updated gevent/zmq libraries
* Switched to unittest2 discovery
* Added option --only-summary to only output the summary to the console, thus disabling the periodic stats output.
* Locust will now make sure to spawn all the specified locusts in distributed mode, not just a multiple of the number of slaves.
* Fixed the broken Vagrant example.
* Fixed the broken events example (events.py).
* Fixed issue where the request column was not sortable in the web-ui.
* Minor styling of the statistics table in the web-ui.
* Added options to specify host and ports in distributed mode using --master-host, --master-port for the slaves, --master-bind-host, --master-bind-port for the master.
* Removed previously deprecated and obsolete classes WebLocust and SubLocust.
* Fixed so that also failed requests count, when specifying a maximum number of requests on the command line


0.6.2
=====

* Made Locust compatible with gevent 1.0rc2. This allows user to step around a problem
  with running Locust under some versions of CentOS, that can be fixed by upgrading
  gevent to 1.0.
* Added :py:attr:`parent <locust.core.TaskSet.parent>` attribute to TaskSet class that
  refers to the parent TaskSet, or Locust, instance. Contributed by Aaron Daubman.


0.6.1
=====

* Fixed bug that was causing problems when setting a maximum number of requests using the
  **-n** or **--num-request** command line parameter.


0.6
===

.. warning::

    This version comes with non backward compatible changes to the API.
    Anyone who is currently using existing locust scripts and want to upgrade to 0.6
    should read through these changes.

:py:class:`SubLocust <locust.core.SubLocust>` replaced by :py:class:`TaskSet <locust.core.TaskSet>` and :py:class:`Locust <locust.core.Locust>` class behavior changed
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

:py:class:`Locust <locust.core.Locust>` classes does no longer control task scheduling and execution.
Therefore, you no longer define tasks within Locust classes, instead the Locust class has a
:py:attr:`task_set <locust.core.Locust.task_set>` attribute which should point to a
:py:class:`TaskSet <locust.core.TaskSet>` class. Tasks should now be defined in TaskSet
classes, in the same way that was previously done in Locust and SubLocust classes. TaskSets can be
nested just like SubLocust classes could.

So the following code for 0.5.1::

    class User(Locust):
        min_wait = 10000
        max_wait = 120000

        @task(10)
        def index(self):
            self.client.get("/")

        @task(2)
        class AboutPage(SubLocust):
            min_wait = 10000
            max_wait = 120000

            def on_init(self):
                self.client.get("/about/")

            @task
            def team_page(self):
                self.client.get("/about/team/")

            @task
            def press_page(self):
                self.client.get("/about/press/")

            @task
            def stop(self):
                self.interrupt()

Should now be written like::

    class BrowsePage(TaskSet):
        @task(10)
        def index(self):
            self.client.get("/")

        @task(2)
        class AboutPage(TaskSet):
            def on_init(self):
                self.client.get("/about/")

            @task
            def team_page(self):
                self.client.get("/about/team/")

            @task
            def press_page(self):
                self.client.get("/about/press/")

            @task
            def stop(self):
                self.interrupt()

    class User(Locust):
        min_wait = 10000
        max_wait = 120000
        task_set = BrowsePage

Each TaskSet instance gets a :py:attr:`locust <locust.core.TaskSet.locust>` attribute, which refers to the
Locust class.

Locust now uses Requests
------------------------

Locust's own HttpBrowser class (which was typically accessed through *self.client* from within a locust class)
has been replaced by a thin wrapper around the requests library (http://python-requests.org). This comes with
a number of advantages. Users can  now take advantage of a well documented, well written, fully fledged
library for making HTTP requests. However, it also comes with some small API changes which will require users
to update their existing load testing scripts.

Gzip encoding turned on by default
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The HTTP client now sends headers for accepting gzip encoding by default. The **--gzip** command line argument
has been removed and if someone want to disable the *Accept-Encoding* that the HTTP client uses, or any
other HTTP headers you can do::

    class MyWebUser(Locust):
        def on_start(self):
            self.client.headers = {"Accept-Encoding":""}


Improved HTTP client
^^^^^^^^^^^^^^^^^^^^

Because of the switch to using python-requests in the HTTP client, the API for the client has also
gotten a few changes.

* Additionally to the :py:meth:`get <locust.clients.HttpSession.get>`, :py:meth:`post <locust.clients.HttpSession.post>`,
  :py:meth:`put <locust.clients.HttpSession.put>`, :py:meth:`delete <locust.clients.HttpSession.delete>` and
  :py:meth:`head <locust.clients.HttpSession.head>` methods, the :py:class:`HttpSession <locust.clients.HttpSession>` class
  now also has :py:meth:`patch <locust.clients.HttpSession.patch>` and :py:meth:`options <locust.clients.HttpSession.options>` methods.

* All arguments to the HTTP request methods, except for **url** and **data** should now be specified as keyword arguments.
  For example, previously one could specify headers using::

      client.get("/path", {"User-Agent":"locust"}) # this will no longer work

  And should now be specified like::

      client.get("/path", headers={"User-Agent":"locust"})

* In general the whole HTTP client is now more powerful since it leverages on python-requests. Features that we're
  now able to use in Locust includes file upload, SSL, connection keep-alive, and more.
  See the `python-requests documentation <http://python-requests.org>`_ for more details.

* The new :py:class:`HttpSession <locust.clients.HttpSession>` class' methods now return python-request
  :py:class:`Response <requests.Response>` objects. This means that accessing the content of the response
  is no longer made using the **data** attribute, but instead the **content** attribute. The HTTP response
  code is now accessed through the **status_code** attribute, instead of the **code** attribute.


HttpSession methods' catch_response argument improved and allow_http_error argument removed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* When doing HTTP requests using the **catch_response** argument, the context manager that is returned now
  provides two functions, :py:meth:`success <locust.clients.ResponseContextManager.success>` and
  :py:meth:`failure <locust.clients.ResponseContextManager.failure>` that can be used to manually control
  what the request should be reported as in Locust's statistics.

  .. autoclass:: locust.clients.ResponseContextManager
    :members: success, failure
    :noindex:

* The **allow_http_error** argument of the HTTP client's methods has been removed. Instead one can use the
  **catch_response** argument to get a context manager, which can be used together with a with statement.

  The following code in the previous Locust version::

      client.get("/does/not/exist", allow_http_error=True)

  Can instead now be written like::

      with client.get("/does/not/exist", catch_response=True) as response:
          response.success()


Other improvements and bug fixes
--------------------------------

* Scheduled task callables can now take keyword arguments and not only normal function arguments.
* SubLocust classes that are scheduled using :func:`locust.core.Locust.schedule_task` can now take
  arguments and keyword arguments (available in *self.args* and *self.kwargs*).
* Fixed bug where the average content size would be zero when doing requests against a server that
  didn't set the content-length header (i.e. server that uses *Transfer-Encoding: chunked*)



Smaller API Changes
-------------------

* The *require_once* decorator has been removed. It was an old legacy function that no longer fit into
  the current way of writing Locust tests, where tasks are either methods under a Locust class or SubLocust
  classes containing task methods.
* Changed signature of :func:`locust.core.Locust.schedule_task`. Previously all extra arguments that
  was given to the method was passed on to the task when it was called. It no longer accepts extra arguments.
  Instead, it takes an *args* argument (list) and a *kwargs* argument (dict) which are be passed to the task when
  it's called.
* Arguments for :py:class:`request_success <locust.events.request_success>` event hook has been changed.
  Previously it took an HTTP Response instance as argument, but this has been changed to take the
  content-length of the response instead. This makes it easier to write custom clients for Locust.


0.5.1
=====

* Fixed bug which caused --logfile and --loglevel command line parameters to not be respected when running
  locust without zeromq.

0.5
===

API changes
-----------

* Web interface is now turned on by default. The **--web** command line option has been replaced by --no-web.
* :func:`locust.events.request_success`  and :func:`locust.events.request_failure` now gets the HTTP method as the first argument.

Improvements and bug fixes
--------------------------

* Removed **--show-task-ratio-confluence** and added a **--show-task-ratio-json** option instead. The
  **--show-task-ratio-json** will output JSON data containing the task execution ratio for the locust
  "brain".
* The HTTP method used when a client requests a URL is now displayed in the web UI
* Some fixes and improvements in the stats exporting:

 * A file name is now set (using content-disposition header) when downloading stats.
 * The order of the column headers for request stats was wrong.
 * Thanks Benjamin W. Smith, Jussi Kuosa and Samuele Pedroni!

0.4
===

API changes
-----------

* WebLocust class has been deprecated and is now called just Locust. The class that was previously
  called Locust is now called LocustBase.
* The *catch_http_error* argument to HttpClient.get() and HttpClient.post() has been renamed to
  *allow_http_error*.

Improvements and bug fixes
--------------------------

* Locust now uses python's logging module for all logging
* Added the ability to change the number of spawned users when a test is running, without having
  to restart the test.
* Experimental support for automatically ramping up and down the number of locust to find a maximum
  number of concurrent users (based on some parameters like response times and acceptable failure
  rate).
* Added support for failing requests based on the response data, even if the HTTP response was OK.
* Improved master node performance in order to not get bottlenecked when using enough slaves (>100)
* Minor improvements in web interface.
* Fixed missing template dir in MANIFEST file causing locust installed with "setup.py install" not to work.
