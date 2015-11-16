#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test /home/codio/workspace/challenges/escape.js

run_js_test "abc 123" $'abc\'s done\nand 123\'s done'

end_js_test
