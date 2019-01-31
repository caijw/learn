
#[derive(Debug)]
struct hello {
	world: u32
}

impl hello {
	pub fn go(i: u32) -> Self {
		Self {
			world: i
		}
	}
}

fn main() {
	let a = hello::go(1);
    println!("{:?}", a);
}
