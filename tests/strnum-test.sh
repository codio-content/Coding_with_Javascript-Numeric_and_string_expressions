#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test /home/codio/workspace/challenges/strnum.js

run_js_test "51 50" "5150"
run_js_test "51 -50" "51-50"
run_js_test "10 0" "100"

end_js_test
