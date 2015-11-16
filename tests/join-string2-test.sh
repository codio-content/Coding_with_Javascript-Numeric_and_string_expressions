#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test /home/codio/workspace/challenges/join-string2.js

run_js_test "Holy Grail" "Holy Grail"
run_js_test "load right" "load right"
run_js_test "herring tree" "herring tree"

end_js_test
