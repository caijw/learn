struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}


fn main() {
	struct User {
	    username: &str,
	    email: &str,
	    sign_in_count: u64,
	    active: bool,
	}

	fn main() {
	    let user1 = User {
	        email: "someone@example.com",
	        username: "someusername123",
	        active: true,
	        sign_in_count: 1,
	    };
	}
	
    let my_string = String::from("hello world");

    // first_word 中传入 `String` 的 slice
    let word = first_word(&my_string[..]);

    println!("{}", word);

    let my_string_literal = "hello world";

    // first_word 中传入字符串字面值的 slice
    let word = first_word(&my_string_literal[..]);

    println!("{}", word);


    // 因为字符串字面值 **就是** 字符串 slice，
    // 这样写也可以，即不使用 slice 语法！
    let word = first_word(my_string_literal);

    println!("{}", word);

}

fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}