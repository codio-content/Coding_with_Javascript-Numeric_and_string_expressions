#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test /home/codio/workspace/challenges/join-string.js

run_js_test "Fred" "Fred, hello!"
run_js_test "123" "123, hello!"
run_js_test "World" "World, hello!"

end_js_test