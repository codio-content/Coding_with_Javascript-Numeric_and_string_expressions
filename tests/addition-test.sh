#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test /home/codio/workspace/challenges/addition.js

run_js_test 0 12
run_js_test -8 4 "Your code does not work for negative numbers."
run_js_test 3 15

end_js_test