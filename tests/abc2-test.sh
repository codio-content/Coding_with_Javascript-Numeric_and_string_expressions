#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test /home/codio/workspace/challenges/abc2.js

run_js_test "1 2 3" "3"
run_js_test "0 20 4" "0"
run_js_test "-4 2 12" "-24"

end_js_test