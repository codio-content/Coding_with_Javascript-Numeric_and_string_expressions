#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test /home/codio/workspace/challenges/fix2.js

run_js_test "1 2 3" "3"
run_js_test "0 4 8" "0"

end_js_test