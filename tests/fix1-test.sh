#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test /home/codio/workspace/challenges/fix1.js

run_js_test "NAME" "Hello, NAME"
run_js_test "world" "Hello, world"

end_js_test