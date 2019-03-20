fn hello(a: i32 = 10) -> i32 {
	return a + 1;
}

fn main() {
	let a = 100;
    let b = hello();
    println!("a: {:?}, b: {:?}", a, b);
}
