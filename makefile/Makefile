txt = Hello World
var-lost:
	export foo=bar
	echo "foo=[$$foo]"
var-kept:
	export foo=bar; echo "foo=[$$foo]"
var-kept1:
	export foo=bar; \
	echo "foo=[$$foo]"
test:
	# 测试
test1:
	@# 测试
test2:
	@# 这是测试
	@echo TODO
	@echo $(txt)
	@echo $$HOME
a.txt b.txt:
	touch $@
LIST = one two three
all:
	for i in $(LIST); do \
		echo $$i; \
	done
